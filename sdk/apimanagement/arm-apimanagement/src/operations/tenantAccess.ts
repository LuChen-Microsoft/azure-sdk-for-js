/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/tenantAccessMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a TenantAccess. */
export class TenantAccess {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a TenantAccess.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns list of access infos - for Git and Management endpoints.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.TenantAccessListByServiceOptionalParams): Promise<Models.TenantAccessListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.AccessInformationCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.TenantAccessListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.AccessInformationCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.TenantAccessListByServiceOptionalParams | msRest.ServiceCallback<Models.AccessInformationCollection>, callback?: msRest.ServiceCallback<Models.AccessInformationCollection>): Promise<Models.TenantAccessListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.TenantAccessListByServiceResponse>;
  }

  /**
   * Tenant access metadata
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<Models.TenantAccessGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.TenantAccessGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.TenantAccessGetEntityTagResponse>;
  }

  /**
   * Get tenant access information details without secrets.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<Models.TenantAccessGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<Models.AccessInformationContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessInformationContract>): void;
  get(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessInformationContract>, callback?: msRest.ServiceCallback<Models.AccessInformationContract>): Promise<Models.TenantAccessGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TenantAccessGetResponse>;
  }

  /**
   * Update tenant access information details.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessCreateResponse>
   */
  create(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationCreateParameters, accessName: Models.AccessIdName, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.TenantAccessCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  create(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationCreateParameters, accessName: Models.AccessIdName, ifMatch: string, callback: msRest.ServiceCallback<Models.AccessInformationContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationCreateParameters, accessName: Models.AccessIdName, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessInformationContract>): void;
  create(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationCreateParameters, accessName: Models.AccessIdName, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessInformationContract>, callback?: msRest.ServiceCallback<Models.AccessInformationContract>): Promise<Models.TenantAccessCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        accessName,
        ifMatch,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.TenantAccessCreateResponse>;
  }

  /**
   * Update tenant access information details.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationUpdateParameters, accessName: Models.AccessIdName, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.TenantAccessUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationUpdateParameters, accessName: Models.AccessIdName, ifMatch: string, callback: msRest.ServiceCallback<Models.AccessInformationContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationUpdateParameters, accessName: Models.AccessIdName, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessInformationContract>): void;
  update(resourceGroupName: string, serviceName: string, parameters: Models.AccessInformationUpdateParameters, accessName: Models.AccessIdName, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessInformationContract>, callback?: msRest.ServiceCallback<Models.AccessInformationContract>): Promise<Models.TenantAccessUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        accessName,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.TenantAccessUpdateResponse>;
  }

  /**
   * Regenerate primary access key
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      regeneratePrimaryKeyOperationSpec,
      callback);
  }

  /**
   * Regenerate secondary access key
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      regenerateSecondaryKeyOperationSpec,
      callback);
  }

  /**
   * Get tenant access information details.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessListSecretsResponse>
   */
  listSecrets(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<Models.TenantAccessListSecretsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  listSecrets(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<Models.AccessInformationSecretsContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  listSecrets(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessInformationSecretsContract>): void;
  listSecrets(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessInformationSecretsContract>, callback?: msRest.ServiceCallback<Models.AccessInformationSecretsContract>): Promise<Models.TenantAccessListSecretsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      listSecretsOperationSpec,
      callback) as Promise<Models.TenantAccessListSecretsResponse>;
  }

  /**
   * Returns list of access infos - for Git and Management endpoints.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TenantAccessListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: Models.TenantAccessListByServiceNextOptionalParams): Promise<Models.TenantAccessListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccessInformationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: Models.TenantAccessListByServiceNextOptionalParams, callback: msRest.ServiceCallback<Models.AccessInformationCollection>): void;
  listByServiceNext(nextPageLink: string, options?: Models.TenantAccessListByServiceNextOptionalParams | msRest.ServiceCallback<Models.AccessInformationCollection>, callback?: msRest.ServiceCallback<Models.AccessInformationCollection>): Promise<Models.TenantAccessListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.TenantAccessListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.TenantAccessGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.TenantAccessGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationContract,
      headersMapper: Mappers.TenantAccessGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.TenantAccessGetHeaders
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.accessName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AccessInformationCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationContract,
      headersMapper: Mappers.TenantAccessCreateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.TenantAccessCreateHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.accessName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AccessInformationUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationContract,
      headersMapper: Mappers.TenantAccessUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.TenantAccessUpdateHeaders
    }
  },
  serializer
};

const regeneratePrimaryKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/regeneratePrimaryKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const regenerateSecondaryKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/regenerateSecondaryKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listSecretsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/listSecrets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationSecretsContract,
      headersMapper: Mappers.TenantAccessListSecretsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.TenantAccessListSecretsHeaders
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
