/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ScriptExecutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ScriptExecution,
  ScriptExecutionsListNextOptionalParams,
  ScriptExecutionsListOptionalParams,
  ScriptExecutionsListResponse,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsGetResponse,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsCreateOrUpdateResponse,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
  ScriptExecutionsGetExecutionLogsResponse,
  ScriptExecutionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScriptExecutions operations. */
export class ScriptExecutionsImpl implements ScriptExecutions {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class ScriptExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List script executions in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListOptionalParams
  ): PagedAsyncIterableIterator<ScriptExecution> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateCloudName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          privateCloudName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListOptionalParams
  ): AsyncIterableIterator<ScriptExecution[]> {
    let result = await this._list(resourceGroupName, privateCloudName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateCloudName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListOptionalParams
  ): AsyncIterableIterator<ScriptExecution> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateCloudName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List script executions in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListOptionalParams
  ): Promise<ScriptExecutionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, options },
      listOperationSpec
    );
  }

  /**
   * Get an script execution by name in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetOptionalParams
  ): Promise<ScriptExecutionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, scriptExecutionName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a script execution in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param scriptExecution A script running in the private cloud
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptExecution: ScriptExecution,
    options?: ScriptExecutionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ScriptExecutionsCreateOrUpdateResponse>,
      ScriptExecutionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ScriptExecutionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptExecution,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a script execution in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param scriptExecution A script running in the private cloud
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptExecution: ScriptExecution,
    options?: ScriptExecutionsCreateOrUpdateOptionalParams
  ): Promise<ScriptExecutionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
      scriptExecution,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Cancel a ScriptExecution in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, privateCloudName, scriptExecutionName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Cancel a ScriptExecution in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Return the logs for a script execution resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param options The options parameters.
   */
  getExecutionLogs(
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetExecutionLogsOptionalParams
  ): Promise<ScriptExecutionsGetExecutionLogsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, scriptExecutionName, options },
      getExecutionLogsOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateCloudName: string,
    nextLink: string,
    options?: ScriptExecutionsListNextOptionalParams
  ): Promise<ScriptExecutionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecutionsList
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
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecution
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
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecution
    },
    201: {
      bodyMapper: Mappers.ScriptExecution
    },
    202: {
      bodyMapper: Mappers.ScriptExecution
    },
    204: {
      bodyMapper: Mappers.ScriptExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.scriptExecution,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
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
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getExecutionLogsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.scriptOutputStreamType,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
