/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BackupVaults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClient } from "../dataProtectionClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BackupVaultResource,
  BackupVaultsGetInSubscriptionNextOptionalParams,
  BackupVaultsGetInSubscriptionOptionalParams,
  BackupVaultsGetInSubscriptionResponse,
  BackupVaultsGetInResourceGroupNextOptionalParams,
  BackupVaultsGetInResourceGroupOptionalParams,
  BackupVaultsGetInResourceGroupResponse,
  BackupVaultsGetOptionalParams,
  BackupVaultsGetResponse,
  BackupVaultsCreateOrUpdateOptionalParams,
  BackupVaultsCreateOrUpdateResponse,
  BackupVaultsDeleteOptionalParams,
  PatchResourceRequestInput,
  BackupVaultsUpdateOptionalParams,
  BackupVaultsUpdateResponse,
  CheckNameAvailabilityRequest,
  BackupVaultsCheckNameAvailabilityOptionalParams,
  BackupVaultsCheckNameAvailabilityResponse,
  BackupVaultsGetInSubscriptionNextResponse,
  BackupVaultsGetInResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BackupVaults operations. */
export class BackupVaultsImpl implements BackupVaults {
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class BackupVaults class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * Returns resource collection belonging to a subscription.
   * @param options The options parameters.
   */
  public listInSubscription(
    options?: BackupVaultsGetInSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<BackupVaultResource> {
    const iter = this.getInSubscriptionPagingAll(options);
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
        return this.getInSubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *getInSubscriptionPagingPage(
    options?: BackupVaultsGetInSubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BackupVaultResource[]> {
    let result: BackupVaultsGetInSubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getInSubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getInSubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getInSubscriptionPagingAll(
    options?: BackupVaultsGetInSubscriptionOptionalParams
  ): AsyncIterableIterator<BackupVaultResource> {
    for await (const page of this.getInSubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns resource collection belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listInResourceGroup(
    resourceGroupName: string,
    options?: BackupVaultsGetInResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<BackupVaultResource> {
    const iter = this.getInResourceGroupPagingAll(resourceGroupName, options);
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
        return this.getInResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *getInResourceGroupPagingPage(
    resourceGroupName: string,
    options?: BackupVaultsGetInResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BackupVaultResource[]> {
    let result: BackupVaultsGetInResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getInResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getInResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getInResourceGroupPagingAll(
    resourceGroupName: string,
    options?: BackupVaultsGetInResourceGroupOptionalParams
  ): AsyncIterableIterator<BackupVaultResource> {
    for await (const page of this.getInResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns resource collection belonging to a subscription.
   * @param options The options parameters.
   */
  private _getInSubscription(
    options?: BackupVaultsGetInSubscriptionOptionalParams
  ): Promise<BackupVaultsGetInSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInSubscriptionOperationSpec
    );
  }

  /**
   * Returns resource collection belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _getInResourceGroup(
    resourceGroupName: string,
    options?: BackupVaultsGetInResourceGroupOptionalParams
  ): Promise<BackupVaultsGetInResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      getInResourceGroupOperationSpec
    );
  }

  /**
   * Returns a resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupVaultsGetOptionalParams
  ): Promise<BackupVaultsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a BackupVault resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: BackupVaultResource,
    options?: BackupVaultsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsCreateOrUpdateResponse>,
      BackupVaultsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BackupVaultsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, vaultName, parameters, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      BackupVaultsCreateOrUpdateResponse,
      OperationState<BackupVaultsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a BackupVault resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: BackupVaultResource,
    options?: BackupVaultsCreateOrUpdateOptionalParams
  ): Promise<BackupVaultsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vaultName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a BackupVault resource from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupVaultsDeleteOptionalParams
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
      args: { resourceGroupName, vaultName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a BackupVault resource from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupVaultsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vaultName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a BackupVault resource belonging to a resource group. For example, updating tags for a
   * resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: PatchResourceRequestInput,
    options?: BackupVaultsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BackupVaultsUpdateResponse>,
      BackupVaultsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BackupVaultsUpdateResponse> => {
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
      args: { resourceGroupName, vaultName, parameters, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      BackupVaultsUpdateResponse,
      OperationState<BackupVaultsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a BackupVault resource belonging to a resource group. For example, updating tags for a
   * resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: PatchResourceRequestInput,
    options?: BackupVaultsUpdateOptionalParams
  ): Promise<BackupVaultsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vaultName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * API to check for resource name availability
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The location in which uniqueness will be verified.
   * @param parameters Check name availability request
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    location: string,
    parameters: CheckNameAvailabilityRequest,
    options?: BackupVaultsCheckNameAvailabilityOptionalParams
  ): Promise<BackupVaultsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, location, parameters, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * GetInSubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the GetInSubscription method.
   * @param options The options parameters.
   */
  private _getInSubscriptionNext(
    nextLink: string,
    options?: BackupVaultsGetInSubscriptionNextOptionalParams
  ): Promise<BackupVaultsGetInSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getInSubscriptionNextOperationSpec
    );
  }

  /**
   * GetInResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the GetInResourceGroup method.
   * @param options The options parameters.
   */
  private _getInResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: BackupVaultsGetInResourceGroupNextOptionalParams
  ): Promise<BackupVaultsGetInResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      getInResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getInSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/backupVaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getInResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResource
    },
    201: {
      bodyMapper: Mappers.BackupVaultResource
    },
    202: {
      bodyMapper: Mappers.BackupVaultResource
    },
    204: {
      bodyMapper: Mappers.BackupVaultResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResource
    },
    201: {
      bodyMapper: Mappers.BackupVaultResource
    },
    202: {
      bodyMapper: Mappers.BackupVaultResource
    },
    204: {
      bodyMapper: Mappers.BackupVaultResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getInSubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getInResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
