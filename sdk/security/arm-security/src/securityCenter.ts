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
  MdeOnboardingsImpl,
  CustomAssessmentAutomationsImpl,
  CustomEntityStoreAssignmentsImpl,
  ComplianceResultsImpl,
  PricingsImpl,
  AdvancedThreatProtectionImpl,
  DeviceSecurityGroupsImpl,
  IotSecuritySolutionImpl,
  IotSecuritySolutionAnalyticsImpl,
  IotSecuritySolutionsAnalyticsAggregatedAlertImpl,
  IotSecuritySolutionsAnalyticsRecommendationImpl,
  LocationsImpl,
  OperationsImpl,
  TasksImpl,
  AutoProvisioningSettingsImpl,
  CompliancesImpl,
  InformationProtectionPoliciesImpl,
  SecurityContactsImpl,
  WorkspaceSettingsImpl,
  RegulatoryComplianceStandardsImpl,
  RegulatoryComplianceControlsImpl,
  RegulatoryComplianceAssessmentsImpl,
  SubAssessmentsImpl,
  AutomationsImpl,
  AlertsSuppressionRulesImpl,
  ServerVulnerabilityAssessmentOperationsImpl,
  AssessmentsMetadataImpl,
  AssessmentsImpl,
  AdaptiveApplicationControlsImpl,
  AdaptiveNetworkHardeningsImpl,
  AllowedConnectionsImpl,
  TopologyImpl,
  JitNetworkAccessPoliciesImpl,
  DiscoveredSecuritySolutionsImpl,
  SecuritySolutionsReferenceDataOperationsImpl,
  ExternalSecuritySolutionsImpl,
  SecureScoresImpl,
  SecureScoreControlsImpl,
  SecureScoreControlDefinitionsImpl,
  SecuritySolutionsImpl,
  ConnectorsImpl,
  AlertsImpl,
  SettingsImpl,
  IngestionSettingsImpl,
  SoftwareInventoriesImpl,
  SecurityConnectorsImpl,
  GovernanceRulesImpl,
  GovernanceAssignmentsImpl,
  ApplicationsImpl,
  ApplicationOperationsImpl,
  SecurityConnectorApplicationsImpl,
  SecurityConnectorApplicationImpl,
  APICollectionImpl,
  APICollectionOnboardingImpl,
  APICollectionOffboardingImpl,
  HealthReportsImpl,
  HealthReportOperationsImpl,
  SqlVulnerabilityAssessmentScansImpl,
  SqlVulnerabilityAssessmentScanResultsImpl,
  SqlVulnerabilityAssessmentBaselineRulesImpl
} from "./operations";
import {
  MdeOnboardings,
  CustomAssessmentAutomations,
  CustomEntityStoreAssignments,
  ComplianceResults,
  Pricings,
  AdvancedThreatProtection,
  DeviceSecurityGroups,
  IotSecuritySolution,
  IotSecuritySolutionAnalytics,
  IotSecuritySolutionsAnalyticsAggregatedAlert,
  IotSecuritySolutionsAnalyticsRecommendation,
  Locations,
  Operations,
  Tasks,
  AutoProvisioningSettings,
  Compliances,
  InformationProtectionPolicies,
  SecurityContacts,
  WorkspaceSettings,
  RegulatoryComplianceStandards,
  RegulatoryComplianceControls,
  RegulatoryComplianceAssessments,
  SubAssessments,
  Automations,
  AlertsSuppressionRules,
  ServerVulnerabilityAssessmentOperations,
  AssessmentsMetadata,
  Assessments,
  AdaptiveApplicationControls,
  AdaptiveNetworkHardenings,
  AllowedConnections,
  Topology,
  JitNetworkAccessPolicies,
  DiscoveredSecuritySolutions,
  SecuritySolutionsReferenceDataOperations,
  ExternalSecuritySolutions,
  SecureScores,
  SecureScoreControls,
  SecureScoreControlDefinitions,
  SecuritySolutions,
  Connectors,
  Alerts,
  Settings,
  IngestionSettings,
  SoftwareInventories,
  SecurityConnectors,
  GovernanceRules,
  GovernanceAssignments,
  Applications,
  ApplicationOperations,
  SecurityConnectorApplications,
  SecurityConnectorApplication,
  APICollection,
  APICollectionOnboarding,
  APICollectionOffboarding,
  HealthReports,
  HealthReportOperations,
  SqlVulnerabilityAssessmentScans,
  SqlVulnerabilityAssessmentScanResults,
  SqlVulnerabilityAssessmentBaselineRules
} from "./operationsInterfaces";
import { SecurityCenterOptionalParams } from "./models";

export class SecurityCenter extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the SecurityCenter class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Azure subscription ID
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SecurityCenterOptionalParams
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
    const defaults: SecurityCenterOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-security/6.0.0-beta.4`;
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
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.mdeOnboardings = new MdeOnboardingsImpl(this);
    this.customAssessmentAutomations = new CustomAssessmentAutomationsImpl(
      this
    );
    this.customEntityStoreAssignments = new CustomEntityStoreAssignmentsImpl(
      this
    );
    this.complianceResults = new ComplianceResultsImpl(this);
    this.pricings = new PricingsImpl(this);
    this.advancedThreatProtection = new AdvancedThreatProtectionImpl(this);
    this.deviceSecurityGroups = new DeviceSecurityGroupsImpl(this);
    this.iotSecuritySolution = new IotSecuritySolutionImpl(this);
    this.iotSecuritySolutionAnalytics = new IotSecuritySolutionAnalyticsImpl(
      this
    );
    this.iotSecuritySolutionsAnalyticsAggregatedAlert = new IotSecuritySolutionsAnalyticsAggregatedAlertImpl(
      this
    );
    this.iotSecuritySolutionsAnalyticsRecommendation = new IotSecuritySolutionsAnalyticsRecommendationImpl(
      this
    );
    this.locations = new LocationsImpl(this);
    this.operations = new OperationsImpl(this);
    this.tasks = new TasksImpl(this);
    this.autoProvisioningSettings = new AutoProvisioningSettingsImpl(this);
    this.compliances = new CompliancesImpl(this);
    this.informationProtectionPolicies = new InformationProtectionPoliciesImpl(
      this
    );
    this.securityContacts = new SecurityContactsImpl(this);
    this.workspaceSettings = new WorkspaceSettingsImpl(this);
    this.regulatoryComplianceStandards = new RegulatoryComplianceStandardsImpl(
      this
    );
    this.regulatoryComplianceControls = new RegulatoryComplianceControlsImpl(
      this
    );
    this.regulatoryComplianceAssessments = new RegulatoryComplianceAssessmentsImpl(
      this
    );
    this.subAssessments = new SubAssessmentsImpl(this);
    this.automations = new AutomationsImpl(this);
    this.alertsSuppressionRules = new AlertsSuppressionRulesImpl(this);
    this.serverVulnerabilityAssessmentOperations = new ServerVulnerabilityAssessmentOperationsImpl(
      this
    );
    this.assessmentsMetadata = new AssessmentsMetadataImpl(this);
    this.assessments = new AssessmentsImpl(this);
    this.adaptiveApplicationControls = new AdaptiveApplicationControlsImpl(
      this
    );
    this.adaptiveNetworkHardenings = new AdaptiveNetworkHardeningsImpl(this);
    this.allowedConnections = new AllowedConnectionsImpl(this);
    this.topology = new TopologyImpl(this);
    this.jitNetworkAccessPolicies = new JitNetworkAccessPoliciesImpl(this);
    this.discoveredSecuritySolutions = new DiscoveredSecuritySolutionsImpl(
      this
    );
    this.securitySolutionsReferenceDataOperations = new SecuritySolutionsReferenceDataOperationsImpl(
      this
    );
    this.externalSecuritySolutions = new ExternalSecuritySolutionsImpl(this);
    this.secureScores = new SecureScoresImpl(this);
    this.secureScoreControls = new SecureScoreControlsImpl(this);
    this.secureScoreControlDefinitions = new SecureScoreControlDefinitionsImpl(
      this
    );
    this.securitySolutions = new SecuritySolutionsImpl(this);
    this.connectors = new ConnectorsImpl(this);
    this.alerts = new AlertsImpl(this);
    this.settings = new SettingsImpl(this);
    this.ingestionSettings = new IngestionSettingsImpl(this);
    this.softwareInventories = new SoftwareInventoriesImpl(this);
    this.securityConnectors = new SecurityConnectorsImpl(this);
    this.governanceRules = new GovernanceRulesImpl(this);
    this.governanceAssignments = new GovernanceAssignmentsImpl(this);
    this.applications = new ApplicationsImpl(this);
    this.applicationOperations = new ApplicationOperationsImpl(this);
    this.securityConnectorApplications = new SecurityConnectorApplicationsImpl(
      this
    );
    this.securityConnectorApplication = new SecurityConnectorApplicationImpl(
      this
    );
    this.aPICollection = new APICollectionImpl(this);
    this.aPICollectionOnboarding = new APICollectionOnboardingImpl(this);
    this.aPICollectionOffboarding = new APICollectionOffboardingImpl(this);
    this.healthReports = new HealthReportsImpl(this);
    this.healthReportOperations = new HealthReportOperationsImpl(this);
    this.sqlVulnerabilityAssessmentScans = new SqlVulnerabilityAssessmentScansImpl(
      this
    );
    this.sqlVulnerabilityAssessmentScanResults = new SqlVulnerabilityAssessmentScanResultsImpl(
      this
    );
    this.sqlVulnerabilityAssessmentBaselineRules = new SqlVulnerabilityAssessmentBaselineRulesImpl(
      this
    );
  }

  mdeOnboardings: MdeOnboardings;
  customAssessmentAutomations: CustomAssessmentAutomations;
  customEntityStoreAssignments: CustomEntityStoreAssignments;
  complianceResults: ComplianceResults;
  pricings: Pricings;
  advancedThreatProtection: AdvancedThreatProtection;
  deviceSecurityGroups: DeviceSecurityGroups;
  iotSecuritySolution: IotSecuritySolution;
  iotSecuritySolutionAnalytics: IotSecuritySolutionAnalytics;
  iotSecuritySolutionsAnalyticsAggregatedAlert: IotSecuritySolutionsAnalyticsAggregatedAlert;
  iotSecuritySolutionsAnalyticsRecommendation: IotSecuritySolutionsAnalyticsRecommendation;
  locations: Locations;
  operations: Operations;
  tasks: Tasks;
  autoProvisioningSettings: AutoProvisioningSettings;
  compliances: Compliances;
  informationProtectionPolicies: InformationProtectionPolicies;
  securityContacts: SecurityContacts;
  workspaceSettings: WorkspaceSettings;
  regulatoryComplianceStandards: RegulatoryComplianceStandards;
  regulatoryComplianceControls: RegulatoryComplianceControls;
  regulatoryComplianceAssessments: RegulatoryComplianceAssessments;
  subAssessments: SubAssessments;
  automations: Automations;
  alertsSuppressionRules: AlertsSuppressionRules;
  serverVulnerabilityAssessmentOperations: ServerVulnerabilityAssessmentOperations;
  assessmentsMetadata: AssessmentsMetadata;
  assessments: Assessments;
  adaptiveApplicationControls: AdaptiveApplicationControls;
  adaptiveNetworkHardenings: AdaptiveNetworkHardenings;
  allowedConnections: AllowedConnections;
  topology: Topology;
  jitNetworkAccessPolicies: JitNetworkAccessPolicies;
  discoveredSecuritySolutions: DiscoveredSecuritySolutions;
  securitySolutionsReferenceDataOperations: SecuritySolutionsReferenceDataOperations;
  externalSecuritySolutions: ExternalSecuritySolutions;
  secureScores: SecureScores;
  secureScoreControls: SecureScoreControls;
  secureScoreControlDefinitions: SecureScoreControlDefinitions;
  securitySolutions: SecuritySolutions;
  connectors: Connectors;
  alerts: Alerts;
  settings: Settings;
  ingestionSettings: IngestionSettings;
  softwareInventories: SoftwareInventories;
  securityConnectors: SecurityConnectors;
  governanceRules: GovernanceRules;
  governanceAssignments: GovernanceAssignments;
  applications: Applications;
  applicationOperations: ApplicationOperations;
  securityConnectorApplications: SecurityConnectorApplications;
  securityConnectorApplication: SecurityConnectorApplication;
  aPICollection: APICollection;
  aPICollectionOnboarding: APICollectionOnboarding;
  aPICollectionOffboarding: APICollectionOffboarding;
  healthReports: HealthReports;
  healthReportOperations: HealthReportOperations;
  sqlVulnerabilityAssessmentScans: SqlVulnerabilityAssessmentScans;
  sqlVulnerabilityAssessmentScanResults: SqlVulnerabilityAssessmentScanResults;
  sqlVulnerabilityAssessmentBaselineRules: SqlVulnerabilityAssessmentBaselineRules;
}
