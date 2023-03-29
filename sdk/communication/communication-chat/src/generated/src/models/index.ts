/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type RetentionPolicyUnion =
  | RetentionPolicy
  | ThreadCreationDateRetentionPolicy;

/** A paged collection of chat message read receipts. */
export interface ChatMessageReadReceiptsCollection {
  /** Collection of chat message read receipts. */
  value: ChatMessageReadReceipt[];
  /**
   * If there are more chat message read receipts that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A chat message read receipt indicates the time a chat message was read by a recipient. */
export interface ChatMessageReadReceipt {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  senderCommunicationIdentifier: CommunicationIdentifierModel;
  /** Id of the chat message that has been read. This id is generated by the server. */
  chatMessageId: string;
  /** The time at which the message was read. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  readOn: Date;
}

/** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
export interface CommunicationIdentifierModel {
  /** Raw Id of the identifier. Optional in requests, required in responses. */
  rawId?: string;
  /** The communication user. */
  communicationUser?: CommunicationUserIdentifierModel;
  /** The phone number. */
  phoneNumber?: PhoneNumberIdentifierModel;
  /** The Microsoft Teams user. */
  microsoftTeamsUser?: MicrosoftTeamsUserIdentifierModel;
}

/** A user that got created with an Azure Communication Services resource. */
export interface CommunicationUserIdentifierModel {
  /** The Id of the communication user. */
  id: string;
}

/** A phone number. */
export interface PhoneNumberIdentifierModel {
  /** The phone number in E.164 format. */
  value: string;
}

/** A Microsoft Teams user. */
export interface MicrosoftTeamsUserIdentifierModel {
  /** The Id of the Microsoft Teams user. If not anonymous, this is the AAD object Id of the user. */
  userId: string;
  /** True if the Microsoft Teams user is anonymous. By default false if missing. */
  isAnonymous?: boolean;
  /** The cloud that the Microsoft Teams user belongs to. By default 'public' if missing. */
  cloud?: CommunicationCloudEnvironmentModel;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: ChatError;
}

/** The Communication Services error. */
export interface ChatError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ChatError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: ChatError;
}

/** Request payload for sending a read receipt. */
export interface SendReadReceiptRequest {
  /** Id of the latest chat message read by the user. */
  chatMessageId: string;
}

/** Details of the message to send. */
export interface SendChatMessageRequest {
  /** Chat message content. */
  content: string;
  /** The display name of the chat message sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
  /** The chat message type. */
  type?: ChatMessageType;
  /** Message metadata. */
  metadata?: { [propertyName: string]: string };
}

/** Result of the send message operation. */
export interface SendChatMessageResult {
  /** A server-generated message id. */
  id: string;
}

/** Collection of chat messages for a particular chat thread. */
export interface ChatMessagesCollection {
  /** Collection of chat messages. */
  value: ChatMessage[];
  /**
   * If there are more chat messages that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Chat message. */
export interface ChatMessage {
  /** The id of the chat message. This id is server generated. */
  id: string;
  /** The chat message type. */
  type: ChatMessageType;
  /** Sequence of the chat message in the conversation. */
  sequenceId: string;
  /** Version of the chat message. */
  version: string;
  /** Content of a chat message. */
  content?: ChatMessageContent;
  /** The display name of the chat message sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
  /** The timestamp when the chat message arrived at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  senderCommunicationIdentifier?: CommunicationIdentifierModel;
  /** The timestamp (if applicable) when the message was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /** The last timestamp (if applicable) when the message was edited. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  editedOn?: Date;
  /** Message metadata. */
  metadata?: { [propertyName: string]: string };
}

/** Content of a chat message. */
export interface ChatMessageContent {
  /** Chat message content for messages of types text or html. */
  message?: string;
  /** Chat message content for messages of type topicUpdated. */
  topic?: string;
  /** Chat message content for messages of types participantAdded or participantRemoved. */
  participants?: ChatParticipant[];
  /** List of attachments for this message */
  attachments?: ChatAttachment[];
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  initiatorCommunicationIdentifier?: CommunicationIdentifierModel;
}

/** A participant of the chat thread. */
export interface ChatParticipant {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  communicationIdentifier: CommunicationIdentifierModel;
  /** Display name for the chat participant. */
  displayName?: string;
  /** Time from which the chat history is shared with the participant. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  shareHistoryTime?: Date;
}

/** An attachment in a chat message. */
export interface ChatAttachment {
  /** Id of the attachment */
  id: string;
  /** The type of attachment. */
  attachmentType: AttachmentType;
  /** The type of content of the attachment, if available */
  contentType?: string;
  /** The name of the attachment content. */
  name?: string;
  /** The URL where the attachment can be downloaded */
  url: string;
  /** The URL where the preview of attachment can be downloaded */
  previewUrl?: string;
}

/** Request payload for updating a chat message. */
export interface UpdateChatMessageRequest {
  /** Chat message content. */
  content?: string;
  /** Message metadata. */
  metadata?: { [propertyName: string]: string };
}

/** Collection of participants belong to a particular thread. */
export interface ChatParticipantsCollection {
  /** Chat participants. */
  value: ChatParticipant[];
  /**
   * If there are more chat participants that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Participants to be added to the thread. */
export interface AddChatParticipantsRequest {
  /** Participants to add to a chat thread. */
  participants: ChatParticipant[];
}

/** Result of the add chat participants operation. */
export interface AddChatParticipantsResult {
  /**
   * The participants that failed to be added to the chat thread.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invalidParticipants?: ChatError[];
}

/** Request payload for creating a chat thread. */
export interface CreateChatThreadRequest {
  /** The chat thread topic. */
  topic: string;
  /** Participants to be added to the chat thread. */
  participants?: ChatParticipant[];
  /** Data retention policy for auto deletion. It's not updatable after creation. */
  retentionPolicy?: RetentionPolicyUnion;
}

/** Data retention policy for auto deletion. It's not updatable after creation. */
export interface RetentionPolicy {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  policyType: "threadCreationDate";
}

/** Result of the create chat thread operation. */
export interface CreateChatThreadResult {
  /** Chat thread. */
  chatThread?: ChatThreadProperties;
  /**
   * The participants that failed to be added to the chat thread.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invalidParticipants?: ChatError[];
}

/** Chat thread. */
export interface ChatThreadProperties {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was created. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  createdByCommunicationIdentifier: CommunicationIdentifierModel;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /** Data retention policy for auto deletion. It's not updatable after creation. */
  retentionPolicy?: RetentionPolicyUnion;
}

/** Collection of chat threads. */
export interface ChatThreadsItemCollection {
  /** Collection of chat threads. */
  value: ChatThreadItem[];
  /**
   * If there are more chat threads that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Summary information of a chat thread. */
export interface ChatThreadItem {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /**
   * The timestamp when the last message arrived at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastMessageReceivedOn?: Date;
  /** Data retention policy for auto deletion. It's not updatable after creation. */
  retentionPolicy?: RetentionPolicyUnion;
}

/** Request payload for updating a chat thread. */
export interface UpdateChatThreadRequest {
  /** Chat thread topic. */
  topic?: string;
}

/** Request payload for typing notifications. */
export interface SendTypingNotificationRequest {
  /** The display name of the typing notification sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
}

/** Thread retention policy based on thread creation date. */
export interface ThreadCreationDateRetentionPolicy extends RetentionPolicy {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  policyType: "threadCreationDate";
  /** Indicates how many days after the thread creation the thread will be deleted. Only 90 is accepted for now. */
  daysAfterCreation: number;
}

/** Known values of {@link CommunicationCloudEnvironmentModel} that the service accepts. */
export enum KnownCommunicationCloudEnvironmentModel {
  /** Public */
  Public = "public",
  /** Dod */
  Dod = "dod",
  /** Gcch */
  Gcch = "gcch"
}

/**
 * Defines values for CommunicationCloudEnvironmentModel. \
 * {@link KnownCommunicationCloudEnvironmentModel} can be used interchangeably with CommunicationCloudEnvironmentModel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **public** \
 * **dod** \
 * **gcch**
 */
export type CommunicationCloudEnvironmentModel = string;

/** Known values of {@link AttachmentType} that the service accepts. */
export enum KnownAttachmentType {
  /** TeamsInlineImage */
  TeamsInlineImage = "teamsInlineImage"
}

/**
 * Defines values for AttachmentType. \
 * {@link KnownAttachmentType} can be used interchangeably with AttachmentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **teamsInlineImage**
 */
export type AttachmentType = string;

/** Known values of {@link PolicyType} that the service accepts. */
export enum KnownPolicyType {
  /** Thread retention policy based on thread creation date. */
  ThreadCreationDate = "threadCreationDate"
}

/**
 * Defines values for PolicyType. \
 * {@link KnownPolicyType} can be used interchangeably with PolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **threadCreationDate**: Thread retention policy based on thread creation date.
 */
export type PolicyType = string;
/** Defines values for ChatMessageType. */
export type ChatMessageType =
  | "text"
  | "html"
  | "topicUpdated"
  | "participantAdded"
  | "participantRemoved";

/** Optional parameters. */
export interface ChatThreadListChatReadReceiptsOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of chat message read receipts to be returned per page. */
  maxPageSize?: number;
  /** Skips chat message read receipts up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatReadReceipts operation. */
export type ChatThreadListChatReadReceiptsResponse = ChatMessageReadReceiptsCollection;

/** Optional parameters. */
export interface ChatThreadSendChatReadReceiptOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadSendChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the sendChatMessage operation. */
export type ChatThreadSendChatMessageResponse = SendChatMessageResult;

/** Optional parameters. */
export interface ChatThreadListChatMessagesOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of messages to be returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get messages up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatMessages operation. */
export type ChatThreadListChatMessagesResponse = ChatMessagesCollection;

/** Optional parameters. */
export interface ChatThreadGetChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getChatMessage operation. */
export type ChatThreadGetChatMessageResponse = ChatMessage;

/** Optional parameters. */
export interface ChatThreadUpdateChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadDeleteChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadListChatParticipantsOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of participants to be returned per page. */
  maxPageSize?: number;
  /** Skips participants up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatParticipants operation. */
export type ChatThreadListChatParticipantsResponse = ChatParticipantsCollection;

/** Optional parameters. */
export interface ChatThreadRemoveChatParticipantOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadAddChatParticipantsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addChatParticipants operation. */
export type ChatThreadAddChatParticipantsResponse = AddChatParticipantsResult;

/** Optional parameters. */
export interface ChatThreadUpdateChatThreadPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadGetChatThreadPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getChatThreadProperties operation. */
export type ChatThreadGetChatThreadPropertiesResponse = ChatThreadProperties;

/** Optional parameters. */
export interface ChatThreadSendTypingNotificationOptionalParams
  extends coreClient.OperationOptions {
  /** Details of the typing notification request. */
  sendTypingNotificationRequest?: SendTypingNotificationRequest;
}

/** Optional parameters. */
export interface ChatThreadListChatReadReceiptsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatReadReceiptsNext operation. */
export type ChatThreadListChatReadReceiptsNextResponse = ChatMessageReadReceiptsCollection;

/** Optional parameters. */
export interface ChatThreadListChatMessagesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatMessagesNext operation. */
export type ChatThreadListChatMessagesNextResponse = ChatMessagesCollection;

/** Optional parameters. */
export interface ChatThreadListChatParticipantsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatParticipantsNext operation. */
export type ChatThreadListChatParticipantsNextResponse = ChatParticipantsCollection;

/** Optional parameters. */
export interface ChatCreateChatThreadOptionalParams
  extends coreClient.OperationOptions {
  /** If specified, the client directs that the request is repeatable; that is, that the client can make the request multiple times with the same Repeatability-Request-Id and get back an appropriate response without the server executing the request multiple times. The value of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs. */
  repeatabilityRequestId?: string;
}

/** Contains response data for the createChatThread operation. */
export type ChatCreateChatThreadResponse = CreateChatThreadResult;

/** Optional parameters. */
export interface ChatListChatThreadsOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of chat threads returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get chat threads up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatThreads operation. */
export type ChatListChatThreadsResponse = ChatThreadsItemCollection;

/** Optional parameters. */
export interface ChatDeleteChatThreadOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatListChatThreadsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatThreadsNext operation. */
export type ChatListChatThreadsNextResponse = ChatThreadsItemCollection;

/** Optional parameters. */
export interface ChatApiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
