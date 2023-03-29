/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  StorageTargetFlushOptionalParams,
  StorageTargetSuspendOptionalParams,
  StorageTargetResumeOptionalParams,
  StorageTargetInvalidateOptionalParams
} from "../models";

/** Interface representing a StorageTargetOperations. */
export interface StorageTargetOperations {
  /**
   * Tells the cache to write all dirty data to the Storage Target's backend storage. Client requests to
   * this storage target's namespace will return errors until the flush operation completes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginFlush(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetFlushOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Tells the cache to write all dirty data to the Storage Target's backend storage. Client requests to
   * this storage target's namespace will return errors until the flush operation completes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginFlushAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetFlushOptionalParams
  ): Promise<void>;
  /**
   * Suspends client access to a storage target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginSuspend(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetSuspendOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Suspends client access to a storage target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginSuspendAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetSuspendOptionalParams
  ): Promise<void>;
  /**
   * Resumes client access to a previously suspended storage target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginResume(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetResumeOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Resumes client access to a previously suspended storage target.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginResumeAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetResumeOptionalParams
  ): Promise<void>;
  /**
   * Invalidate all cached data for a storage target. Cached files are discarded and fetched from the
   * back end on the next request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginInvalidate(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetInvalidateOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Invalidate all cached data for a storage target. Cached files are discarded and fetched from the
   * back end on the next request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  beginInvalidateAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetInvalidateOptionalParams
  ): Promise<void>;
}
