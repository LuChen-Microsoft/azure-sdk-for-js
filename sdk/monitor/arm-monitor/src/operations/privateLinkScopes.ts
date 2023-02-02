/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PrivateLinkScopes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AzureMonitorPrivateLinkScope,
  PrivateLinkScopesListNextOptionalParams,
  PrivateLinkScopesListOptionalParams,
  PrivateLinkScopesListResponse,
  PrivateLinkScopesListByResourceGroupNextOptionalParams,
  PrivateLinkScopesListByResourceGroupOptionalParams,
  PrivateLinkScopesListByResourceGroupResponse,
  PrivateLinkScopesDeleteOptionalParams,
  PrivateLinkScopesGetOptionalParams,
  PrivateLinkScopesGetResponse,
  PrivateLinkScopesCreateOrUpdateOptionalParams,
  PrivateLinkScopesCreateOrUpdateResponse,
  TagsResource,
  PrivateLinkScopesUpdateTagsOptionalParams,
  PrivateLinkScopesUpdateTagsResponse,
  PrivateLinkScopesListNextResponse,
  PrivateLinkScopesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkScopes operations. */
export class PrivateLinkScopesImpl implements PrivateLinkScopes {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class PrivateLinkScopes class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Gets a list of all Azure Monitor PrivateLinkScopes within a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: PrivateLinkScopesListOptionalParams
  ): PagedAsyncIterableIterator<AzureMonitorPrivateLinkScope> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: PrivateLinkScopesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureMonitorPrivateLinkScope[]> {
    let result: PrivateLinkScopesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: PrivateLinkScopesListOptionalParams
  ): AsyncIterableIterator<AzureMonitorPrivateLinkScope> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of Azure Monitor PrivateLinkScopes within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateLinkScopesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AzureMonitorPrivateLinkScope> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: PrivateLinkScopesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureMonitorPrivateLinkScope[]> {
    let result: PrivateLinkScopesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
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

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: PrivateLinkScopesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AzureMonitorPrivateLinkScope> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all Azure Monitor PrivateLinkScopes within a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: PrivateLinkScopesListOptionalParams
  ): Promise<PrivateLinkScopesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list of Azure Monitor PrivateLinkScopes within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateLinkScopesListByResourceGroupOptionalParams
  ): Promise<PrivateLinkScopesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Deletes a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopesDeleteOptionalParams
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
      { resourceGroupName, scopeName, options },
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
   * Deletes a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      scopeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateLinkScopesGetOptionalParams
  ): Promise<PrivateLinkScopesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, options },
      getOperationSpec
    );
  }

  /**
   * Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value
   * for InstrumentationKey nor AppId in the Put operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param azureMonitorPrivateLinkScopePayload Properties that need to be specified to create or update
   *                                            a Azure Monitor PrivateLinkScope.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    scopeName: string,
    azureMonitorPrivateLinkScopePayload: AzureMonitorPrivateLinkScope,
    options?: PrivateLinkScopesCreateOrUpdateOptionalParams
  ): Promise<PrivateLinkScopesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        scopeName,
        azureMonitorPrivateLinkScopePayload,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Monitor PrivateLinkScope resource.
   * @param privateLinkScopeTags Updated tag information to set into the PrivateLinkScope instance.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    scopeName: string,
    privateLinkScopeTags: TagsResource,
    options?: PrivateLinkScopesUpdateTagsOptionalParams
  ): Promise<PrivateLinkScopesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, privateLinkScopeTags, options },
      updateTagsOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PrivateLinkScopesListNextOptionalParams
  ): Promise<PrivateLinkScopesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PrivateLinkScopesListByResourceGroupNextOptionalParams
  ): Promise<PrivateLinkScopesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/microsoft.insights/privateLinkScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScopeListResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion11],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScopeListResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion11],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion11],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScope
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion11],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScope
    },
    201: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScope
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.azureMonitorPrivateLinkScopePayload,
  queryParameters: [Parameters.apiVersion11],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScope
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.privateLinkScopeTags,
  queryParameters: [Parameters.apiVersion11],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.scopeName
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
      bodyMapper: Mappers.AzureMonitorPrivateLinkScopeListResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorPrivateLinkScopeListResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
