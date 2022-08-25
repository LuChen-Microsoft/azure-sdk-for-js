/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Catalog,
  CatalogsListByDevCenterOptionalParams,
  CatalogsGetOptionalParams,
  CatalogsGetResponse,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsCreateOrUpdateResponse,
  CatalogUpdate,
  CatalogsUpdateOptionalParams,
  CatalogsUpdateResponse,
  CatalogsDeleteOptionalParams,
  CatalogsSyncOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Catalogs. */
export interface Catalogs {
  /**
   * Lists catalogs for a devcenter.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: CatalogsListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<Catalog>;
  /**
   * Gets a catalog
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsGetOptionalParams
  ): Promise<CatalogsGetResponse>;
  /**
   * Creates or updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Represents a catalog.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CatalogsCreateOrUpdateResponse>,
      CatalogsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Represents a catalog.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams
  ): Promise<CatalogsCreateOrUpdateResponse>;
  /**
   * Partially updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Updatable catalog properties.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: CatalogUpdate,
    options?: CatalogsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CatalogsUpdateResponse>,
      CatalogsUpdateResponse
    >
  >;
  /**
   * Partially updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Updatable catalog properties.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: CatalogUpdate,
    options?: CatalogsUpdateOptionalParams
  ): Promise<CatalogsUpdateResponse>;
  /**
   * Deletes a catalog resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a catalog resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Syncs templates for a template source.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  beginSync(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsSyncOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Syncs templates for a template source.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  beginSyncAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsSyncOptionalParams
  ): Promise<void>;
}