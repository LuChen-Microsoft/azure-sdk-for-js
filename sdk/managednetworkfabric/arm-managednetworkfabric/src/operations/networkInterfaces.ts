/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NetworkInterfaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetworkInterface,
  NetworkInterfacesListByNetworkDeviceNextOptionalParams,
  NetworkInterfacesListByNetworkDeviceOptionalParams,
  NetworkInterfacesListByNetworkDeviceResponse,
  NetworkInterfacesCreateOptionalParams,
  NetworkInterfacesCreateResponse,
  NetworkInterfacesGetOptionalParams,
  NetworkInterfacesGetResponse,
  NetworkInterfacePatch,
  NetworkInterfacesUpdateOptionalParams,
  NetworkInterfacesUpdateResponse,
  NetworkInterfacesDeleteOptionalParams,
  UpdateAdministrativeState,
  NetworkInterfacesUpdateAdministrativeStateOptionalParams,
  NetworkInterfacesUpdateAdministrativeStateResponse,
  NetworkInterfacesListByNetworkDeviceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkInterfaces operations. */
export class NetworkInterfacesImpl implements NetworkInterfaces {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class NetworkInterfaces class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * List all the Network Interface resources in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param options The options parameters.
   */
  public listByNetworkDevice(
    resourceGroupName: string,
    networkDeviceName: string,
    options?: NetworkInterfacesListByNetworkDeviceOptionalParams
  ): PagedAsyncIterableIterator<NetworkInterface> {
    const iter = this.listByNetworkDevicePagingAll(
      resourceGroupName,
      networkDeviceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByNetworkDevicePagingPage(
          resourceGroupName,
          networkDeviceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByNetworkDevicePagingPage(
    resourceGroupName: string,
    networkDeviceName: string,
    options?: NetworkInterfacesListByNetworkDeviceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkInterface[]> {
    let result: NetworkInterfacesListByNetworkDeviceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNetworkDevice(
        resourceGroupName,
        networkDeviceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNetworkDeviceNext(
        resourceGroupName,
        networkDeviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNetworkDevicePagingAll(
    resourceGroupName: string,
    networkDeviceName: string,
    options?: NetworkInterfacesListByNetworkDeviceOptionalParams
  ): AsyncIterableIterator<NetworkInterface> {
    for await (const page of this.listByNetworkDevicePagingPage(
      resourceGroupName,
      networkDeviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a Network Interface resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    body: NetworkInterface,
    options?: NetworkInterfacesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkInterfacesCreateResponse>,
      NetworkInterfacesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkInterfacesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkDeviceName,
        networkInterfaceName,
        body,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkInterfacesCreateResponse,
      OperationState<NetworkInterfacesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Network Interface resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    body: NetworkInterface,
    options?: NetworkInterfacesCreateOptionalParams
  ): Promise<NetworkInterfacesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      networkDeviceName,
      networkInterfaceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the Network Interface resource details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    options?: NetworkInterfacesGetOptionalParams
  ): Promise<NetworkInterfacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkDeviceName, networkInterfaceName, options },
      getOperationSpec
    );
  }

  /**
   * Update certain properties of the Network Interface resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param body NetworkInterface properties to update. Only tags are supported.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    body: NetworkInterfacePatch,
    options?: NetworkInterfacesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkInterfacesUpdateResponse>,
      NetworkInterfacesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkInterfacesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkDeviceName,
        networkInterfaceName,
        body,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkInterfacesUpdateResponse,
      OperationState<NetworkInterfacesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update certain properties of the Network Interface resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param body NetworkInterface properties to update. Only tags are supported.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    body: NetworkInterfacePatch,
    options?: NetworkInterfacesUpdateOptionalParams
  ): Promise<NetworkInterfacesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      networkDeviceName,
      networkInterfaceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the Network Interface resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    options?: NetworkInterfacesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkDeviceName,
        networkInterfaceName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the Network Interface resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    options?: NetworkInterfacesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkDeviceName,
      networkInterfaceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the Network Interface resources in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param options The options parameters.
   */
  private _listByNetworkDevice(
    resourceGroupName: string,
    networkDeviceName: string,
    options?: NetworkInterfacesListByNetworkDeviceOptionalParams
  ): Promise<NetworkInterfacesListByNetworkDeviceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkDeviceName, options },
      listByNetworkDeviceOperationSpec
    );
  }

  /**
   * Update the admin state of the Network Interface.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeState(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    body: UpdateAdministrativeState,
    options?: NetworkInterfacesUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkInterfacesUpdateAdministrativeStateResponse>,
      NetworkInterfacesUpdateAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkInterfacesUpdateAdministrativeStateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        networkDeviceName,
        networkInterfaceName,
        body,
        options
      },
      spec: updateAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkInterfacesUpdateAdministrativeStateResponse,
      OperationState<NetworkInterfacesUpdateAdministrativeStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the admin state of the Network Interface.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param networkInterfaceName Name of the Network Interface.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    networkDeviceName: string,
    networkInterfaceName: string,
    body: UpdateAdministrativeState,
    options?: NetworkInterfacesUpdateAdministrativeStateOptionalParams
  ): Promise<NetworkInterfacesUpdateAdministrativeStateResponse> {
    const poller = await this.beginUpdateAdministrativeState(
      resourceGroupName,
      networkDeviceName,
      networkInterfaceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByNetworkDeviceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkDeviceName Name of the Network Device.
   * @param nextLink The nextLink from the previous successful call to the ListByNetworkDevice method.
   * @param options The options parameters.
   */
  private _listByNetworkDeviceNext(
    resourceGroupName: string,
    networkDeviceName: string,
    nextLink: string,
    options?: NetworkInterfacesListByNetworkDeviceNextOptionalParams
  ): Promise<NetworkInterfacesListByNetworkDeviceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkDeviceName, nextLink, options },
      listByNetworkDeviceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    201: {
      bodyMapper: Mappers.NetworkInterface
    },
    202: {
      bodyMapper: Mappers.NetworkInterface
    },
    204: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body28,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkDeviceName,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkDeviceName,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    201: {
      bodyMapper: Mappers.NetworkInterface
    },
    202: {
      bodyMapper: Mappers.NetworkInterface
    },
    204: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkDeviceName,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkDeviceName,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNetworkDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfacesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkDeviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}/updateAdministrativeState",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkDeviceName,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByNetworkDeviceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfacesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.networkDeviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
