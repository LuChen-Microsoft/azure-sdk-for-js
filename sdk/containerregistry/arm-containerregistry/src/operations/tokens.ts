/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Tokens } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClient } from "../containerRegistryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Token,
  TokensListNextOptionalParams,
  TokensListOptionalParams,
  TokensListResponse,
  TokensGetOptionalParams,
  TokensGetResponse,
  TokensCreateOptionalParams,
  TokensCreateResponse,
  TokensDeleteOptionalParams,
  TokenUpdateParameters,
  TokensUpdateOptionalParams,
  TokensUpdateResponse,
  TokensListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Tokens operations. */
export class TokensImpl implements Tokens {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class Tokens class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the tokens for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: TokensListOptionalParams
  ): PagedAsyncIterableIterator<Token> {
    const iter = this.listPagingAll(resourceGroupName, registryName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          registryName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    options?: TokensListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Token[]> {
    let result: TokensListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, registryName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    registryName: string,
    options?: TokensListOptionalParams
  ): AsyncIterableIterator<Token> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the tokens for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: TokensListOptionalParams
  ): Promise<TokensListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the properties of the specified token.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    options?: TokensGetOptionalParams
  ): Promise<TokensGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, tokenName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a token for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param tokenCreateParameters The parameters for creating a token.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    tokenCreateParameters: Token,
    options?: TokensCreateOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<TokensCreateResponse>, TokensCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TokensCreateResponse> => {
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
        registryName,
        tokenName,
        tokenCreateParameters,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      TokensCreateResponse,
      OperationState<TokensCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a token for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param tokenCreateParameters The parameters for creating a token.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    tokenCreateParameters: Token,
    options?: TokensCreateOptionalParams
  ): Promise<TokensCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      registryName,
      tokenName,
      tokenCreateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a token from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    options?: TokensDeleteOptionalParams
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
      args: { resourceGroupName, registryName, tokenName, options },
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
   * Deletes a token from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    options?: TokensDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      tokenName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a token with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param tokenUpdateParameters The parameters for updating a token.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    tokenUpdateParameters: TokenUpdateParameters,
    options?: TokensUpdateOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<TokensUpdateResponse>, TokensUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TokensUpdateResponse> => {
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
        registryName,
        tokenName,
        tokenUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      TokensUpdateResponse,
      OperationState<TokensUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a token with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param tokenName The name of the token.
   * @param tokenUpdateParameters The parameters for updating a token.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    tokenName: string,
    tokenUpdateParameters: TokenUpdateParameters,
    options?: TokensUpdateOptionalParams
  ): Promise<TokensUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      registryName,
      tokenName,
      tokenUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: TokensListNextOptionalParams
  ): Promise<TokensListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TokenListResult
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
    Parameters.registryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Token
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
    Parameters.registryName,
    Parameters.tokenName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Token
    },
    201: {
      bodyMapper: Mappers.Token
    },
    202: {
      bodyMapper: Mappers.Token
    },
    204: {
      bodyMapper: Mappers.Token
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.tokenCreateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.tokenName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
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
    Parameters.registryName,
    Parameters.tokenName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Token
    },
    201: {
      bodyMapper: Mappers.Token
    },
    202: {
      bodyMapper: Mappers.Token
    },
    204: {
      bodyMapper: Mappers.Token
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.tokenUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.tokenName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TokenListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
