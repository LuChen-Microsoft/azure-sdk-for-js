/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/jobsMappers";
import * as Parameters from "../models/parameters";
import { BatchAIManagementClientContext } from "../batchAIManagementClientContext";

/** Class representing a Jobs. */
export class Jobs {
  private readonly client: BatchAIManagementClientContext;

  /**
   * Create a Jobs.
   * @param {BatchAIManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchAIManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of Jobs within the specified Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListByExperimentResponse>
   */
  listByExperiment(resourceGroupName: string, workspaceName: string, experimentName: string, options?: Models.JobsListByExperimentOptionalParams): Promise<Models.JobsListByExperimentResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param callback The callback
   */
  listByExperiment(resourceGroupName: string, workspaceName: string, experimentName: string, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByExperiment(resourceGroupName: string, workspaceName: string, experimentName: string, options: Models.JobsListByExperimentOptionalParams, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  listByExperiment(resourceGroupName: string, workspaceName: string, experimentName: string, options?: Models.JobsListByExperimentOptionalParams | msRest.ServiceCallback<Models.JobListResult>, callback?: msRest.ServiceCallback<Models.JobListResult>): Promise<Models.JobsListByExperimentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        options
      },
      listByExperimentOperationSpec,
      callback) as Promise<Models.JobsListByExperimentResponse>;
  }

  /**
   * Creates a Job in the given Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param parameters The parameters to provide for job creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsCreateResponse>
   */
  create(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, parameters: Models.JobCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.JobsCreateResponse> {
    return this.beginCreate(resourceGroupName,workspaceName,experimentName,jobName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.JobsCreateResponse>;
  }

  /**
   * Deletes a Job.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,experimentName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about a Job.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Job>): void;
  get(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Job>, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.JobsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        jobName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobsGetResponse>;
  }

  /**
   * List all directories and files inside the given directory of the Job's output directory (if the
   * output directory is on Azure File Share or Azure Storage Container).
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param jobsListOutputFilesOptions Additional parameters for the operation
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListOutputFilesResponse>
   */
  listOutputFiles(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, jobsListOutputFilesOptions: Models.JobsListOutputFilesOptions, options?: msRest.RequestOptionsBase): Promise<Models.JobsListOutputFilesResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param jobsListOutputFilesOptions Additional parameters for the operation
   * @param callback The callback
   */
  listOutputFiles(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, jobsListOutputFilesOptions: Models.JobsListOutputFilesOptions, callback: msRest.ServiceCallback<Models.FileListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param jobsListOutputFilesOptions Additional parameters for the operation
   * @param options The optional parameters
   * @param callback The callback
   */
  listOutputFiles(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, jobsListOutputFilesOptions: Models.JobsListOutputFilesOptions, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileListResult>): void;
  listOutputFiles(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, jobsListOutputFilesOptions: Models.JobsListOutputFilesOptions, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileListResult>, callback?: msRest.ServiceCallback<Models.FileListResult>): Promise<Models.JobsListOutputFilesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        jobName,
        jobsListOutputFilesOptions,
        options
      },
      listOutputFilesOperationSpec,
      callback) as Promise<Models.JobsListOutputFilesResponse>;
  }

  /**
   * Gets a list of currently existing nodes which were used for the Job execution. The returned
   * information contains the node ID, its public IP and SSH port.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListRemoteLoginInformationResponse>
   */
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsListRemoteLoginInformationResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param callback The callback
   */
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RemoteLoginInformationListResult>, callback?: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): Promise<Models.JobsListRemoteLoginInformationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        jobName,
        options
      },
      listRemoteLoginInformationOperationSpec,
      callback) as Promise<Models.JobsListRemoteLoginInformationResponse>;
  }

  /**
   * Terminates a job.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  terminate(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginTerminate(resourceGroupName,workspaceName,experimentName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a Job in the given Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param parameters The parameters to provide for job creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, parameters: Models.JobCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        jobName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes a Job.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        jobName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Terminates a job.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param jobName The name of the job within the specified resource group. Job names can only
   * contain a combination of alphanumeric characters along with dash (-) and underscore (_). The
   * name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTerminate(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        jobName,
        options
      },
      beginTerminateOperationSpec,
      options);
  }

  /**
   * Gets a list of Jobs within the specified Experiment.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListByExperimentNextResponse>
   */
  listByExperimentNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsListByExperimentNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByExperimentNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByExperimentNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobListResult>): void;
  listByExperimentNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobListResult>, callback?: msRest.ServiceCallback<Models.JobListResult>): Promise<Models.JobsListByExperimentNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByExperimentNextOperationSpec,
      callback) as Promise<Models.JobsListByExperimentNextResponse>;
  }

  /**
   * List all directories and files inside the given directory of the Job's output directory (if the
   * output directory is on Azure File Share or Azure Storage Container).
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListOutputFilesNextResponse>
   */
  listOutputFilesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsListOutputFilesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOutputFilesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FileListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOutputFilesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileListResult>): void;
  listOutputFilesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileListResult>, callback?: msRest.ServiceCallback<Models.FileListResult>): Promise<Models.JobsListOutputFilesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOutputFilesNextOperationSpec,
      callback) as Promise<Models.JobsListOutputFilesNextResponse>;
  }

  /**
   * Gets a list of currently existing nodes which were used for the Job execution. The returned
   * information contains the node ID, its public IP and SSH port.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobsListRemoteLoginInformationNextResponse>
   */
  listRemoteLoginInformationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobsListRemoteLoginInformationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRemoteLoginInformationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRemoteLoginInformationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  listRemoteLoginInformationNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RemoteLoginInformationListResult>, callback?: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): Promise<Models.JobsListRemoteLoginInformationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listRemoteLoginInformationNextOperationSpec,
      callback) as Promise<Models.JobsListRemoteLoginInformationNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByExperimentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxResults3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOutputFilesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}/listOutputFiles",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.outputdirectoryid,
    Parameters.directory,
    Parameters.linkexpiryinminutes,
    Parameters.maxResults4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listRemoteLoginInformationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}/listRemoteLoginInformation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RemoteLoginInformationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.JobCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTerminateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}/terminate",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByExperimentNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOutputFilesNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listRemoteLoginInformationNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RemoteLoginInformationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
