/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttpCompat from "@azure/core-http-compat";
import {
  ServiceImpl,
  FileSystemOperationsImpl,
  PathOperationsImpl
} from "./operations";
import {
  Service,
  FileSystemOperations,
  PathOperations
} from "./operationsInterfaces";
import { StorageClientOptionalParams } from "./models";

export class StorageClient extends coreHttpCompat.ExtendedServiceClient {
  url: string;
  version: string;
  resource: string;
  xMsLeaseDuration?: number;

  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, container, or blob that is the target of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorageClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-azure-storage-datalake/12.20.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.version = options.version || "2021-12-02";
    this.resource = options.resource || "filesystem";
    this.service = new ServiceImpl(this);
    this.fileSystemOperations = new FileSystemOperationsImpl(this);
    this.pathOperations = new PathOperationsImpl(this);
  }

  service: Service;
  fileSystemOperations: FileSystemOperations;
  pathOperations: PathOperations;
}
