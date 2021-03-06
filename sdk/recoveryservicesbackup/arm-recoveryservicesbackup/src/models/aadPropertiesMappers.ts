/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AADProperties,
  AADPropertiesResource,
  AzureBackupServerContainer,
  AzureBackupServerEngine,
  AzureFileShareBackupRequest,
  AzureFileShareProtectableItem,
  AzureFileshareProtectedItem,
  AzureFileshareProtectedItemExtendedInfo,
  AzureFileShareProtectionPolicy,
  AzureFileShareProvisionILRRequest,
  AzureFileShareRecoveryPoint,
  AzureFileShareRestoreRequest,
  AzureIaaSClassicComputeVMContainer,
  AzureIaaSClassicComputeVMProtectableItem,
  AzureIaaSClassicComputeVMProtectedItem,
  AzureIaaSComputeVMContainer,
  AzureIaaSComputeVMProtectableItem,
  AzureIaaSComputeVMProtectedItem,
  AzureIaaSVMErrorInfo,
  AzureIaaSVMHealthDetails,
  AzureIaaSVMJob,
  AzureIaaSVMJobExtendedInfo,
  AzureIaaSVMJobTaskDetails,
  AzureIaaSVMProtectedItem,
  AzureIaaSVMProtectedItemExtendedInfo,
  AzureIaaSVMProtectionPolicy,
  AzureRecoveryServiceVaultProtectionIntent,
  AzureResourceProtectionIntent,
  AzureSQLAGWorkloadContainerProtectionContainer,
  AzureSqlContainer,
  AzureSqlProtectedItem,
  AzureSqlProtectedItemExtendedInfo,
  AzureSqlProtectionPolicy,
  AzureStorageContainer,
  AzureStorageErrorInfo,
  AzureStorageJob,
  AzureStorageJobExtendedInfo,
  AzureStorageJobTaskDetails,
  AzureStorageProtectableContainer,
  AzureVMAppContainerProtectableContainer,
  AzureVMAppContainerProtectionContainer,
  AzureVmWorkloadItem,
  AzureVmWorkloadProtectableItem,
  AzureVmWorkloadProtectedItem,
  AzureVmWorkloadProtectedItemExtendedInfo,
  AzureVmWorkloadProtectionPolicy,
  AzureVmWorkloadSAPAseDatabaseProtectedItem,
  AzureVmWorkloadSAPAseDatabaseWorkloadItem,
  AzureVmWorkloadSAPAseSystemProtectableItem,
  AzureVmWorkloadSAPAseSystemWorkloadItem,
  AzureVmWorkloadSAPHanaDatabaseProtectableItem,
  AzureVmWorkloadSAPHanaDatabaseProtectedItem,
  AzureVmWorkloadSAPHanaDatabaseWorkloadItem,
  AzureVmWorkloadSAPHanaSystemProtectableItem,
  AzureVmWorkloadSAPHanaSystemWorkloadItem,
  AzureVmWorkloadSQLAvailabilityGroupProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectedItem,
  AzureVmWorkloadSQLDatabaseWorkloadItem,
  AzureVmWorkloadSQLInstanceProtectableItem,
  AzureVmWorkloadSQLInstanceWorkloadItem,
  AzureWorkloadAutoProtectionIntent,
  AzureWorkloadBackupRequest,
  AzureWorkloadContainer,
  AzureWorkloadContainerExtendedInfo,
  AzureWorkloadErrorInfo,
  AzureWorkloadJob,
  AzureWorkloadJobExtendedInfo,
  AzureWorkloadJobTaskDetails,
  AzureWorkloadPointInTimeRecoveryPoint,
  AzureWorkloadPointInTimeRestoreRequest,
  AzureWorkloadRecoveryPoint,
  AzureWorkloadRestoreRequest,
  AzureWorkloadSAPHanaPointInTimeRecoveryPoint,
  AzureWorkloadSAPHanaPointInTimeRestoreRequest,
  AzureWorkloadSAPHanaPointInTimeRestoreWithRehydrateRequest,
  AzureWorkloadSAPHanaRecoveryPoint,
  AzureWorkloadSAPHanaRestoreRequest,
  AzureWorkloadSAPHanaRestoreWithRehydrateRequest,
  AzureWorkloadSQLAutoProtectionIntent,
  AzureWorkloadSQLPointInTimeRecoveryPoint,
  AzureWorkloadSQLPointInTimeRestoreRequest,
  AzureWorkloadSQLPointInTimeRestoreWithRehydrateRequest,
  AzureWorkloadSQLRecoveryPoint,
  AzureWorkloadSQLRecoveryPointExtendedInfo,
  AzureWorkloadSQLRestoreRequest,
  AzureWorkloadSQLRestoreWithRehydrateRequest,
  BackupEngineBase,
  BackupEngineBaseResource,
  BackupEngineExtendedInfo,
  BackupRequest,
  BackupRequestResource,
  BackupResourceConfig,
  BackupResourceConfigResource,
  BackupResourceEncryptionConfig,
  BackupResourceEncryptionConfigResource,
  BackupResourceVaultConfig,
  BackupResourceVaultConfigResource,
  BaseResource,
  BEKDetails,
  ContainerIdentityInfo,
  CrossRegionRestoreRequest,
  CrossRegionRestoreRequestResource,
  CrrAccessToken,
  CrrAccessTokenResource,
  CrrJobRequest,
  CrrJobRequestResource,
  DailyRetentionFormat,
  DailyRetentionSchedule,
  Day,
  DiskExclusionProperties,
  DiskInformation,
  DistributedNodesInfo,
  DpmBackupEngine,
  DpmContainer,
  DPMContainerExtendedInfo,
  DpmErrorInfo,
  DpmJob,
  DpmJobExtendedInfo,
  DpmJobTaskDetails,
  DPMProtectedItem,
  DPMProtectedItemExtendedInfo,
  EncryptionDetails,
  ErrorAdditionalInfo,
  ErrorDetail,
  ExtendedProperties,
  GenericContainer,
  GenericContainerExtendedInfo,
  GenericProtectedItem,
  GenericProtectionPolicy,
  GenericRecoveryPoint,
  IaasVMBackupRequest,
  IaaSVMContainer,
  IaasVMILRRegistrationRequest,
  IaaSVMProtectableItem,
  IaasVMRecoveryPoint,
  IaasVMRestoreRequest,
  IaasVMRestoreWithRehydrationRequest,
  ILRRequest,
  ILRRequestResource,
  InquiryInfo,
  InquiryValidation,
  InstantRPAdditionalDetails,
  Job,
  JobResource,
  KEKDetails,
  KeyAndSecretDetails,
  KPIResourceHealthDetails,
  LogSchedulePolicy,
  LongTermRetentionPolicy,
  LongTermSchedulePolicy,
  MabContainer,
  MabContainerExtendedInfo,
  MABContainerHealthDetails,
  MabErrorInfo,
  MabFileFolderProtectedItem,
  MabFileFolderProtectedItemExtendedInfo,
  MabJob,
  MabJobExtendedInfo,
  MabJobTaskDetails,
  MabProtectionPolicy,
  MonthlyRetentionSchedule,
  NewErrorResponse,
  NewErrorResponseError,
  PointInTimeRange,
  PreBackupValidation,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateEndpointConnectionResource,
  PrivateLinkServiceConnectionState,
  ProtectableContainer,
  ProtectableContainerResource,
  ProtectedItem,
  ProtectedItemResource,
  ProtectionContainer,
  ProtectionContainerResource,
  ProtectionIntent,
  ProtectionIntentResource,
  ProtectionPolicy,
  ProtectionPolicyResource,
  RecoveryPoint,
  RecoveryPointDiskConfiguration,
  RecoveryPointMoveReadinessInfo,
  RecoveryPointRehydrationInfo,
  RecoveryPointResource,
  RecoveryPointTierInformation,
  Resource,
  ResourceHealthDetails,
  RestoreFileSpecs,
  RestoreRequest,
  RestoreRequestResource,
  RetentionDuration,
  RetentionPolicy,
  SchedulePolicy,
  Settings,
  SimpleRetentionPolicy,
  SimpleSchedulePolicy,
  SQLDataDirectory,
  SQLDataDirectoryMapping,
  SubProtectionPolicy,
  TargetAFSRestoreInfo,
  TargetRestoreInfo,
  VaultJob,
  VaultJobErrorInfo,
  VaultJobExtendedInfo,
  WeeklyRetentionFormat,
  WeeklyRetentionSchedule,
  WorkloadCrrAccessToken,
  WorkloadInquiryDetails,
  WorkloadItem,
  WorkloadItemResource,
  WorkloadProtectableItem,
  WorkloadProtectableItemResource,
  YearlyRetentionSchedule
} from "../models/mappers";
