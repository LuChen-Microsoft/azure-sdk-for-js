/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JobSteps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  JobStep,
  JobStepsListByVersionNextOptionalParams,
  JobStepsListByVersionOptionalParams,
  JobStepsListByVersionResponse,
  JobStepsListByJobNextOptionalParams,
  JobStepsListByJobOptionalParams,
  JobStepsListByJobResponse,
  JobStepsGetByVersionOptionalParams,
  JobStepsGetByVersionResponse,
  JobStepsGetOptionalParams,
  JobStepsGetResponse,
  JobStepsCreateOrUpdateOptionalParams,
  JobStepsCreateOrUpdateResponse,
  JobStepsDeleteOptionalParams,
  JobStepsListByVersionNextResponse,
  JobStepsListByJobNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobSteps operations. */
export class JobStepsImpl implements JobSteps {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobSteps class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all job steps in the specified job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobVersion The version of the job to get.
   * @param options The options parameters.
   */
  public listByVersion(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    options?: JobStepsListByVersionOptionalParams
  ): PagedAsyncIterableIterator<JobStep> {
    const iter = this.listByVersionPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobVersion,
      options
    );
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
        return this.listByVersionPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          jobVersion,
          options,
          settings
        );
      }
    };
  }

  private async *listByVersionPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    options?: JobStepsListByVersionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JobStep[]> {
    let result: JobStepsListByVersionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByVersion(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobVersion,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByVersionNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobVersion,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByVersionPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    options?: JobStepsListByVersionOptionalParams
  ): AsyncIterableIterator<JobStep> {
    for await (const page of this.listByVersionPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobVersion,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all job steps for a job's current version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  public listByJob(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobStepsListByJobOptionalParams
  ): PagedAsyncIterableIterator<JobStep> {
    const iter = this.listByJobPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      options
    );
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
        return this.listByJobPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          options,
          settings
        );
      }
    };
  }

  private async *listByJobPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobStepsListByJobOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JobStep[]> {
    let result: JobStepsListByJobResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByJob(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByJobNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByJobPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobStepsListByJobOptionalParams
  ): AsyncIterableIterator<JobStep> {
    for await (const page of this.listByJobPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all job steps in the specified job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobVersion The version of the job to get.
   * @param options The options parameters.
   */
  private _listByVersion(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    options?: JobStepsListByVersionOptionalParams
  ): Promise<JobStepsListByVersionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobVersion,
        options
      },
      listByVersionOperationSpec
    );
  }

  /**
   * Gets the specified version of a job step.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobVersion The version of the job to get.
   * @param stepName The name of the job step.
   * @param options The options parameters.
   */
  getByVersion(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    stepName: string,
    options?: JobStepsGetByVersionOptionalParams
  ): Promise<JobStepsGetByVersionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobVersion,
        stepName,
        options
      },
      getByVersionOperationSpec
    );
  }

  /**
   * Gets all job steps for a job's current version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  private _listByJob(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobStepsListByJobOptionalParams
  ): Promise<JobStepsListByJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, jobName, options },
      listByJobOperationSpec
    );
  }

  /**
   * Gets a job step in a job's current version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param stepName The name of the job step.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    stepName: string,
    options?: JobStepsGetOptionalParams
  ): Promise<JobStepsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        stepName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a job step. This will implicitly create a new job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param stepName The name of the job step.
   * @param parameters The requested state of the job step.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    stepName: string,
    parameters: JobStep,
    options?: JobStepsCreateOrUpdateOptionalParams
  ): Promise<JobStepsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        stepName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a job step. This will implicitly create a new job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param stepName The name of the job step to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    stepName: string,
    options?: JobStepsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        stepName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * ListByVersionNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobVersion The version of the job to get.
   * @param nextLink The nextLink from the previous successful call to the ListByVersion method.
   * @param options The options parameters.
   */
  private _listByVersionNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    nextLink: string,
    options?: JobStepsListByVersionNextOptionalParams
  ): Promise<JobStepsListByVersionNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobVersion,
        nextLink,
        options
      },
      listByVersionNextOperationSpec
    );
  }

  /**
   * ListByJobNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param nextLink The nextLink from the previous successful call to the ListByJob method.
   * @param options The options parameters.
   */
  private _listByJobNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    nextLink: string,
    options?: JobStepsListByJobNextOptionalParams
  ): Promise<JobStepsListByJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        nextLink,
        options
      },
      listByJobNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByVersionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}/steps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStepListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByVersionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}/steps/{stepName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStep
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.stepName,
    Parameters.jobVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStepListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStep
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.stepName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JobStep
    },
    201: {
      bodyMapper: Mappers.JobStep
    },
    default: {}
  },
  requestBody: Parameters.parameters26,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.stepName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.stepName
  ],
  serializer
};
const listByVersionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStepListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStepListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
