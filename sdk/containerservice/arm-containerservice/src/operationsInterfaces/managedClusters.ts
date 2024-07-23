/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ManagedCluster,
  ManagedClustersListOptionalParams,
  ManagedClustersListByResourceGroupOptionalParams,
  OutboundEnvironmentEndpoint,
  ManagedClustersListOutboundNetworkDependenciesEndpointsOptionalParams,
  GuardrailsAvailableVersion,
  ManagedClustersListGuardrailsVersionsOptionalParams,
  SafeguardsAvailableVersion,
  ManagedClustersListSafeguardsVersionsOptionalParams,
  MeshRevisionProfile,
  ManagedClustersListMeshRevisionProfilesOptionalParams,
  MeshUpgradeProfile,
  ManagedClustersListMeshUpgradeProfilesOptionalParams,
  ManagedClustersGetOSOptionsOptionalParams,
  ManagedClustersGetOSOptionsResponse,
  ManagedClustersListKubernetesVersionsOptionalParams,
  ManagedClustersListKubernetesVersionsResponse,
  ManagedClustersGetUpgradeProfileOptionalParams,
  ManagedClustersGetUpgradeProfileResponse,
  ManagedClustersGetAccessProfileOptionalParams,
  ManagedClustersGetAccessProfileResponse,
  ManagedClustersListClusterAdminCredentialsOptionalParams,
  ManagedClustersListClusterAdminCredentialsResponse,
  ManagedClustersListClusterUserCredentialsOptionalParams,
  ManagedClustersListClusterUserCredentialsResponse,
  ManagedClustersListClusterMonitoringUserCredentialsOptionalParams,
  ManagedClustersListClusterMonitoringUserCredentialsResponse,
  ManagedClustersGetOptionalParams,
  ManagedClustersGetResponse,
  ManagedClustersCreateOrUpdateOptionalParams,
  ManagedClustersCreateOrUpdateResponse,
  TagsObject,
  ManagedClustersUpdateTagsOptionalParams,
  ManagedClustersUpdateTagsResponse,
  ManagedClustersDeleteOptionalParams,
  ManagedClustersDeleteResponse,
  ManagedClusterServicePrincipalProfile,
  ManagedClustersResetServicePrincipalProfileOptionalParams,
  ManagedClusterAADProfile,
  ManagedClustersResetAADProfileOptionalParams,
  ManagedClustersAbortLatestOperationOptionalParams,
  ManagedClustersAbortLatestOperationResponse,
  ManagedClustersRotateClusterCertificatesOptionalParams,
  ManagedClustersRotateClusterCertificatesResponse,
  ManagedClustersRotateServiceAccountSigningKeysOptionalParams,
  ManagedClustersRotateServiceAccountSigningKeysResponse,
  ManagedClustersStopOptionalParams,
  ManagedClustersStopResponse,
  ManagedClustersStartOptionalParams,
  ManagedClustersStartResponse,
  RunCommandRequest,
  ManagedClustersRunCommandOptionalParams,
  ManagedClustersRunCommandResponse,
  ManagedClustersGetCommandResultOptionalParams,
  ManagedClustersGetCommandResultResponse,
  ManagedClustersGetGuardrailsVersionsOptionalParams,
  ManagedClustersGetGuardrailsVersionsResponse,
  ManagedClustersGetSafeguardsVersionsOptionalParams,
  ManagedClustersGetSafeguardsVersionsResponse,
  ManagedClustersGetMeshRevisionProfileOptionalParams,
  ManagedClustersGetMeshRevisionProfileResponse,
  ManagedClustersGetMeshUpgradeProfileOptionalParams,
  ManagedClustersGetMeshUpgradeProfileResponse,
  RebalanceLoadBalancersRequestBody,
  ManagedClustersRebalanceLoadBalancersOptionalParams,
  ManagedClustersRebalanceLoadBalancersResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedClusters. */
export interface ManagedClusters {
  /**
   * Gets a list of managed clusters in the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: ManagedClustersListOptionalParams,
  ): PagedAsyncIterableIterator<ManagedCluster>;
  /**
   * Lists managed clusters in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ManagedCluster>;
  /**
   * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified
   * managed cluster. The operation returns properties of each egress endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
  /**
   * Contains list of Guardrails version along with its support info and whether it is a default version.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  listGuardrailsVersions(
    location: string,
    options?: ManagedClustersListGuardrailsVersionsOptionalParams,
  ): PagedAsyncIterableIterator<GuardrailsAvailableVersion>;
  /**
   * Contains list of Safeguards version along with its support info and whether it is a default version.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  listSafeguardsVersions(
    location: string,
    options?: ManagedClustersListSafeguardsVersionsOptionalParams,
  ): PagedAsyncIterableIterator<SafeguardsAvailableVersion>;
  /**
   * Contains extra metadata on each revision, including supported revisions, cluster compatibility and
   * available upgrades
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  listMeshRevisionProfiles(
    location: string,
    options?: ManagedClustersListMeshRevisionProfilesOptionalParams,
  ): PagedAsyncIterableIterator<MeshRevisionProfile>;
  /**
   * Lists available upgrades for all service meshes in a specific cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listMeshUpgradeProfiles(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersListMeshUpgradeProfilesOptionalParams,
  ): PagedAsyncIterableIterator<MeshUpgradeProfile>;
  /**
   * Gets supported OS options in the specified subscription.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  getOSOptions(
    location: string,
    options?: ManagedClustersGetOSOptionsOptionalParams,
  ): Promise<ManagedClustersGetOSOptionsResponse>;
  /**
   * Contains extra metadata on the version, including supported patch versions, capabilities, available
   * upgrades, and details on preview status of the version
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  listKubernetesVersions(
    location: string,
    options?: ManagedClustersListKubernetesVersionsOptionalParams,
  ): Promise<ManagedClustersListKubernetesVersionsResponse>;
  /**
   * Gets the upgrade profile of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  getUpgradeProfile(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersGetUpgradeProfileOptionalParams,
  ): Promise<ManagedClustersGetUpgradeProfileResponse>;
  /**
   * **WARNING**: This API will be deprecated. Instead use
   * [ListClusterUserCredentials](https://docs.microsoft.com/rest/api/aks/managedclusters/listclusterusercredentials)
   * or
   * [ListClusterAdminCredentials](https://docs.microsoft.com/rest/api/aks/managedclusters/listclusteradmincredentials)
   * .
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param roleName The name of the role for managed cluster accessProfile resource.
   * @param options The options parameters.
   */
  getAccessProfile(
    resourceGroupName: string,
    resourceName: string,
    roleName: string,
    options?: ManagedClustersGetAccessProfileOptionalParams,
  ): Promise<ManagedClustersGetAccessProfileResponse>;
  /**
   * Lists the admin credentials of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listClusterAdminCredentials(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersListClusterAdminCredentialsOptionalParams,
  ): Promise<ManagedClustersListClusterAdminCredentialsResponse>;
  /**
   * Lists the user credentials of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listClusterUserCredentials(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersListClusterUserCredentialsOptionalParams,
  ): Promise<ManagedClustersListClusterUserCredentialsResponse>;
  /**
   * Lists the cluster monitoring user credentials of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listClusterMonitoringUserCredentials(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersListClusterMonitoringUserCredentialsOptionalParams,
  ): Promise<ManagedClustersListClusterMonitoringUserCredentialsResponse>;
  /**
   * Gets a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersGetOptionalParams,
  ): Promise<ManagedClustersGetResponse>;
  /**
   * Creates or updates a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The managed cluster to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedCluster,
    options?: ManagedClustersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersCreateOrUpdateResponse>,
      ManagedClustersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The managed cluster to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedCluster,
    options?: ManagedClustersCreateOrUpdateOptionalParams,
  ): Promise<ManagedClustersCreateOrUpdateResponse>;
  /**
   * Updates tags on a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Update Managed Cluster Tags operation.
   * @param options The options parameters.
   */
  beginUpdateTags(
    resourceGroupName: string,
    resourceName: string,
    parameters: TagsObject,
    options?: ManagedClustersUpdateTagsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersUpdateTagsResponse>,
      ManagedClustersUpdateTagsResponse
    >
  >;
  /**
   * Updates tags on a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Update Managed Cluster Tags operation.
   * @param options The options parameters.
   */
  beginUpdateTagsAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: TagsObject,
    options?: ManagedClustersUpdateTagsOptionalParams,
  ): Promise<ManagedClustersUpdateTagsResponse>;
  /**
   * Deletes a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersDeleteResponse>,
      ManagedClustersDeleteResponse
    >
  >;
  /**
   * Deletes a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersDeleteOptionalParams,
  ): Promise<ManagedClustersDeleteResponse>;
  /**
   * This action cannot be performed on a cluster that is not using a service principal
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The service principal profile to set on the managed cluster.
   * @param options The options parameters.
   */
  beginResetServicePrincipalProfile(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedClusterServicePrincipalProfile,
    options?: ManagedClustersResetServicePrincipalProfileOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * This action cannot be performed on a cluster that is not using a service principal
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The service principal profile to set on the managed cluster.
   * @param options The options parameters.
   */
  beginResetServicePrincipalProfileAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedClusterServicePrincipalProfile,
    options?: ManagedClustersResetServicePrincipalProfileOptionalParams,
  ): Promise<void>;
  /**
   * **WARNING**: This API will be deprecated. Please see [AKS-managed Azure Active Directory
   * integration](https://aka.ms/aks-managed-aad) to update your cluster with AKS-managed Azure AD.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The AAD profile to set on the Managed Cluster
   * @param options The options parameters.
   */
  beginResetAADProfile(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedClusterAADProfile,
    options?: ManagedClustersResetAADProfileOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * **WARNING**: This API will be deprecated. Please see [AKS-managed Azure Active Directory
   * integration](https://aka.ms/aks-managed-aad) to update your cluster with AKS-managed Azure AD.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The AAD profile to set on the Managed Cluster
   * @param options The options parameters.
   */
  beginResetAADProfileAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedClusterAADProfile,
    options?: ManagedClustersResetAADProfileOptionalParams,
  ): Promise<void>;
  /**
   * Aborts the currently running operation on the managed cluster. The Managed Cluster will be moved to
   * a Canceling state and eventually to a Canceled state when cancellation finishes. If the operation
   * completes before cancellation can take place, an error is returned.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginAbortLatestOperation(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersAbortLatestOperationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersAbortLatestOperationResponse>,
      ManagedClustersAbortLatestOperationResponse
    >
  >;
  /**
   * Aborts the currently running operation on the managed cluster. The Managed Cluster will be moved to
   * a Canceling state and eventually to a Canceled state when cancellation finishes. If the operation
   * completes before cancellation can take place, an error is returned.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginAbortLatestOperationAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersAbortLatestOperationOptionalParams,
  ): Promise<ManagedClustersAbortLatestOperationResponse>;
  /**
   * See [Certificate rotation](https://docs.microsoft.com/azure/aks/certificate-rotation) for more
   * details about rotating managed cluster certificates.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginRotateClusterCertificates(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersRotateClusterCertificatesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersRotateClusterCertificatesResponse>,
      ManagedClustersRotateClusterCertificatesResponse
    >
  >;
  /**
   * See [Certificate rotation](https://docs.microsoft.com/azure/aks/certificate-rotation) for more
   * details about rotating managed cluster certificates.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginRotateClusterCertificatesAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersRotateClusterCertificatesOptionalParams,
  ): Promise<ManagedClustersRotateClusterCertificatesResponse>;
  /**
   * Rotates the service account signing keys of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginRotateServiceAccountSigningKeys(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersRotateServiceAccountSigningKeysOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersRotateServiceAccountSigningKeysResponse>,
      ManagedClustersRotateServiceAccountSigningKeysResponse
    >
  >;
  /**
   * Rotates the service account signing keys of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginRotateServiceAccountSigningKeysAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersRotateServiceAccountSigningKeysOptionalParams,
  ): Promise<ManagedClustersRotateServiceAccountSigningKeysResponse>;
  /**
   * This can only be performed on Azure Virtual Machine Scale set backed clusters. Stopping a cluster
   * stops the control plane and agent nodes entirely, while maintaining all object and cluster state. A
   * cluster does not accrue charges while it is stopped. See [stopping a
   * cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about stopping a
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersStopOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersStopResponse>,
      ManagedClustersStopResponse
    >
  >;
  /**
   * This can only be performed on Azure Virtual Machine Scale set backed clusters. Stopping a cluster
   * stops the control plane and agent nodes entirely, while maintaining all object and cluster state. A
   * cluster does not accrue charges while it is stopped. See [stopping a
   * cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about stopping a
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersStopOptionalParams,
  ): Promise<ManagedClustersStopResponse>;
  /**
   * See [starting a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details
   * about starting a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersStartOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersStartResponse>,
      ManagedClustersStartResponse
    >
  >;
  /**
   * See [starting a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details
   * about starting a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClustersStartOptionalParams,
  ): Promise<ManagedClustersStartResponse>;
  /**
   * AKS will create a pod to run the command. This is primarily useful for private clusters. For more
   * information see [AKS Run
   * Command](https://docs.microsoft.com/azure/aks/private-clusters#aks-run-command-preview).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param requestPayload The run command request
   * @param options The options parameters.
   */
  beginRunCommand(
    resourceGroupName: string,
    resourceName: string,
    requestPayload: RunCommandRequest,
    options?: ManagedClustersRunCommandOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersRunCommandResponse>,
      ManagedClustersRunCommandResponse
    >
  >;
  /**
   * AKS will create a pod to run the command. This is primarily useful for private clusters. For more
   * information see [AKS Run
   * Command](https://docs.microsoft.com/azure/aks/private-clusters#aks-run-command-preview).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param requestPayload The run command request
   * @param options The options parameters.
   */
  beginRunCommandAndWait(
    resourceGroupName: string,
    resourceName: string,
    requestPayload: RunCommandRequest,
    options?: ManagedClustersRunCommandOptionalParams,
  ): Promise<ManagedClustersRunCommandResponse>;
  /**
   * Gets the results of a command which has been run on the Managed Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param commandId Id of the command.
   * @param options The options parameters.
   */
  getCommandResult(
    resourceGroupName: string,
    resourceName: string,
    commandId: string,
    options?: ManagedClustersGetCommandResultOptionalParams,
  ): Promise<ManagedClustersGetCommandResultResponse>;
  /**
   * Contains Guardrails version along with its support info and whether it is a default version.
   * @param location The name of the Azure region.
   * @param version Safeguards version
   * @param options The options parameters.
   */
  getGuardrailsVersions(
    location: string,
    version: string,
    options?: ManagedClustersGetGuardrailsVersionsOptionalParams,
  ): Promise<ManagedClustersGetGuardrailsVersionsResponse>;
  /**
   * Contains Safeguards version along with its support info and whether it is a default version.
   * @param location The name of the Azure region.
   * @param version Safeguards version
   * @param options The options parameters.
   */
  getSafeguardsVersions(
    location: string,
    version: string,
    options?: ManagedClustersGetSafeguardsVersionsOptionalParams,
  ): Promise<ManagedClustersGetSafeguardsVersionsResponse>;
  /**
   * Contains extra metadata on the revision, including supported revisions, cluster compatibility and
   * available upgrades
   * @param location The name of the Azure region.
   * @param mode The mode of the mesh.
   * @param options The options parameters.
   */
  getMeshRevisionProfile(
    location: string,
    mode: string,
    options?: ManagedClustersGetMeshRevisionProfileOptionalParams,
  ): Promise<ManagedClustersGetMeshRevisionProfileResponse>;
  /**
   * Gets available upgrades for a service mesh in a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param mode The mode of the mesh.
   * @param options The options parameters.
   */
  getMeshUpgradeProfile(
    resourceGroupName: string,
    resourceName: string,
    mode: string,
    options?: ManagedClustersGetMeshUpgradeProfileOptionalParams,
  ): Promise<ManagedClustersGetMeshUpgradeProfileResponse>;
  /**
   * Rebalance nodes across specific load balancers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The names of the load balancers to be rebalanced. If set to empty, all load
   *                   balancers will be rebalanced.
   * @param options The options parameters.
   */
  beginRebalanceLoadBalancers(
    resourceGroupName: string,
    resourceName: string,
    parameters: RebalanceLoadBalancersRequestBody,
    options?: ManagedClustersRebalanceLoadBalancersOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersRebalanceLoadBalancersResponse>,
      ManagedClustersRebalanceLoadBalancersResponse
    >
  >;
  /**
   * Rebalance nodes across specific load balancers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The names of the load balancers to be rebalanced. If set to empty, all load
   *                   balancers will be rebalanced.
   * @param options The options parameters.
   */
  beginRebalanceLoadBalancersAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: RebalanceLoadBalancersRequestBody,
    options?: ManagedClustersRebalanceLoadBalancersOptionalParams,
  ): Promise<ManagedClustersRebalanceLoadBalancersResponse>;
}
