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
import * as Mappers from "../models/vaultCertificatesMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesClientContext } from "../recoveryServicesClientContext";

/** Class representing a VaultCertificates. */
export class VaultCertificates {
  private readonly client: RecoveryServicesClientContext;

  /**
   * Create a VaultCertificates.
   * @param {RecoveryServicesClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesClientContext) {
    this.client = client;
  }

  /**
   * Uploads a certificate for a resource.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param vaultName The name of the recovery services vault.
   * @param certificateName Certificate friendly name.
   * @param certificateRequest Input parameters for uploading the vault certificate.
   * @param [options] The optional parameters
   * @returns Promise<Models.VaultCertificatesCreateResponse>
   */
  create(resourceGroupName: string, vaultName: string, certificateName: string, certificateRequest: Models.CertificateRequest, options?: msRest.RequestOptionsBase): Promise<Models.VaultCertificatesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param vaultName The name of the recovery services vault.
   * @param certificateName Certificate friendly name.
   * @param certificateRequest Input parameters for uploading the vault certificate.
   * @param callback The callback
   */
  create(resourceGroupName: string, vaultName: string, certificateName: string, certificateRequest: Models.CertificateRequest, callback: msRest.ServiceCallback<Models.VaultCertificateResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param vaultName The name of the recovery services vault.
   * @param certificateName Certificate friendly name.
   * @param certificateRequest Input parameters for uploading the vault certificate.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, vaultName: string, certificateName: string, certificateRequest: Models.CertificateRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VaultCertificateResponse>): void;
  create(resourceGroupName: string, vaultName: string, certificateName: string, certificateRequest: Models.CertificateRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VaultCertificateResponse>, callback?: msRest.ServiceCallback<Models.VaultCertificateResponse>): Promise<Models.VaultCertificatesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        certificateName,
        certificateRequest,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.VaultCertificatesCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.certificateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "certificateRequest",
    mapper: {
      ...Mappers.CertificateRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VaultCertificateResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
