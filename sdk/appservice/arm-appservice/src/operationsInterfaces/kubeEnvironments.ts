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
  KubeEnvironment,
  KubeEnvironmentsListBySubscriptionOptionalParams,
  KubeEnvironmentsListByResourceGroupOptionalParams,
  KubeEnvironmentsGetOptionalParams,
  KubeEnvironmentsGetResponse,
  KubeEnvironmentsCreateOrUpdateOptionalParams,
  KubeEnvironmentsCreateOrUpdateResponse,
  KubeEnvironmentsDeleteOptionalParams,
  KubeEnvironmentPatchResource,
  KubeEnvironmentsUpdateOptionalParams,
  KubeEnvironmentsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KubeEnvironments. */
export interface KubeEnvironments {
  /**
   * Description for Get all Kubernetes Environments for a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: KubeEnvironmentsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<KubeEnvironment>;
  /**
   * Description for Get all the Kubernetes Environments in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: KubeEnvironmentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<KubeEnvironment>;
  /**
   * Description for Get the properties of a Kubernetes Environment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the Kubernetes Environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: KubeEnvironmentsGetOptionalParams
  ): Promise<KubeEnvironmentsGetResponse>;
  /**
   * Description for Creates or updates a Kubernetes Environment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the Kubernetes Environment.
   * @param kubeEnvironmentEnvelope Configuration details of the Kubernetes Environment.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    kubeEnvironmentEnvelope: KubeEnvironment,
    options?: KubeEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<KubeEnvironmentsCreateOrUpdateResponse>,
      KubeEnvironmentsCreateOrUpdateResponse
    >
  >;
  /**
   * Description for Creates or updates a Kubernetes Environment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the Kubernetes Environment.
   * @param kubeEnvironmentEnvelope Configuration details of the Kubernetes Environment.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    kubeEnvironmentEnvelope: KubeEnvironment,
    options?: KubeEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<KubeEnvironmentsCreateOrUpdateResponse>;
  /**
   * Description for Delete a Kubernetes Environment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the Kubernetes Environment.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    options?: KubeEnvironmentsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Description for Delete a Kubernetes Environment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the Kubernetes Environment.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: KubeEnvironmentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Description for Creates or updates a Kubernetes Environment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the Kubernetes Environment.
   * @param kubeEnvironmentEnvelope Configuration details of the Kubernetes Environment.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    kubeEnvironmentEnvelope: KubeEnvironmentPatchResource,
    options?: KubeEnvironmentsUpdateOptionalParams
  ): Promise<KubeEnvironmentsUpdateResponse>;
}
