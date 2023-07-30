/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { NotebookOperationResult } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { NotebookOperationResultGetOptionalParams } from "../models";

/** Class containing NotebookOperationResult operations. */
export class NotebookOperationResultImpl implements NotebookOperationResult {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class NotebookOperationResult class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Get notebook operation result
   * @param operationId Operation ID.
   * @param options The options parameters.
   */
  async get(
    operationId: string,
    options?: NotebookOperationResultGetOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.get",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { operationId, options },
          getOperationSpec
        ) as Promise<void>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/notebookOperationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
