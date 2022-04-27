/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  WorkspacesImpl,
  UsagesImpl,
  VirtualMachineSizesImpl,
  QuotasImpl,
  ComputeOperationsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  WorkspaceConnectionsImpl,
  WorkspaceFeaturesImpl,
  WorkspaceSkusImpl
} from "./operations";
import {
  Operations,
  Workspaces,
  Usages,
  VirtualMachineSizes,
  Quotas,
  ComputeOperations,
  PrivateEndpointConnections,
  PrivateLinkResources,
  WorkspaceConnections,
  WorkspaceFeatures,
  WorkspaceSkus
} from "./operationsInterfaces";
import { AzureMachineLearningWorkspacesOptionalParams } from "./models";

export class AzureMachineLearningWorkspaces extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the AzureMachineLearningWorkspaces class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureMachineLearningWorkspacesOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureMachineLearningWorkspacesOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-machinelearningservices/5.0.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-07-01";
    this.operations = new OperationsImpl(this);
    this.workspaces = new WorkspacesImpl(this);
    this.usages = new UsagesImpl(this);
    this.virtualMachineSizes = new VirtualMachineSizesImpl(this);
    this.quotas = new QuotasImpl(this);
    this.computeOperations = new ComputeOperationsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.workspaceConnections = new WorkspaceConnectionsImpl(this);
    this.workspaceFeatures = new WorkspaceFeaturesImpl(this);
    this.workspaceSkus = new WorkspaceSkusImpl(this);
  }

  operations: Operations;
  workspaces: Workspaces;
  usages: Usages;
  virtualMachineSizes: VirtualMachineSizes;
  quotas: Quotas;
  computeOperations: ComputeOperations;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  workspaceConnections: WorkspaceConnections;
  workspaceFeatures: WorkspaceFeatures;
  workspaceSkus: WorkspaceSkus;
}
