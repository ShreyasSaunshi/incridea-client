import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPaymentOrder: MutationCreatePaymentOrderResult;
  login: MutationLoginResult;
  refreshToken: MutationRefreshTokenResult;
  resetPassword: MutationResetPasswordResult;
  sendEmailVerification: MutationSendEmailVerificationResult;
  sendPasswordResetEmail: MutationSendPasswordResetEmailResult;
  signUp: MutationSignUpResult;
  verifyEmail: MutationVerifyEmailResult;
};


export type MutationCreatePaymentOrderArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
  type: OrderType;
};


export type MutationLoginArgs = {
  data: UserLoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendEmailVerificationArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationSignUpArgs = {
  data: UserCreateInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};

export type MutationCreatePaymentOrderResult = Error | MutationCreatePaymentOrderSuccess;

export type MutationCreatePaymentOrderSuccess = {
  __typename?: 'MutationCreatePaymentOrderSuccess';
  data: PaymentOrder;
};

export type MutationLoginResult = Error | MutationLoginSuccess;

export type MutationLoginSuccess = {
  __typename?: 'MutationLoginSuccess';
  data: UserLoginPayload;
};

export type MutationRefreshTokenResult = Error | MutationRefreshTokenSuccess;

export type MutationRefreshTokenSuccess = {
  __typename?: 'MutationRefreshTokenSuccess';
  data: UserLoginPayload;
};

export type MutationResetPasswordResult = Error | MutationResetPasswordSuccess;

export type MutationResetPasswordSuccess = {
  __typename?: 'MutationResetPasswordSuccess';
  data: User;
};

export type MutationSendEmailVerificationResult = Error | MutationSendEmailVerificationSuccess;

export type MutationSendEmailVerificationSuccess = {
  __typename?: 'MutationSendEmailVerificationSuccess';
  data: Scalars['String'];
};

export type MutationSendPasswordResetEmailResult = Error | MutationSendPasswordResetEmailSuccess;

export type MutationSendPasswordResetEmailSuccess = {
  __typename?: 'MutationSendPasswordResetEmailSuccess';
  data: Scalars['String'];
};

export type MutationSignUpResult = Error | MutationSignUpSuccess;

export type MutationSignUpSuccess = {
  __typename?: 'MutationSignUpSuccess';
  data: User;
};

export type MutationVerifyEmailResult = Error | MutationVerifyEmailSuccess;

export type MutationVerifyEmailSuccess = {
  __typename?: 'MutationVerifyEmailSuccess';
  data: User;
};

export enum OrderType {
  EventRegistration = 'EVENT_REGISTRATION',
  FestRegistration = 'FEST_REGISTRATION'
}

export type PaymentOrder = {
  __typename?: 'PaymentOrder';
  amount: Scalars['Int'];
  id: Scalars['ID'];
  orderId: Scalars['ID'];
  status: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  me: QueryMeResult;
  users: Array<User>;
};

export type QueryMeResult = Error | QueryMeSuccess;

export type QueryMeSuccess = {
  __typename?: 'QueryMeSuccess';
  data: User;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  name: Scalars['String'];
  role: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginPayload = {
  __typename?: 'UserLoginPayload';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type FestRegPaymentOrderMutationVariables = Exact<{ [key: string]: never; }>;


export type FestRegPaymentOrderMutation = { __typename?: 'Mutation', createPaymentOrder: { __typename: 'Error', message: string } | { __typename: 'MutationCreatePaymentOrderSuccess', data: { __typename?: 'PaymentOrder', amount: number, orderId: string, status: string, user: { __typename?: 'User', email: string, name: string } } } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename: 'Error', message: string } | { __typename: 'MutationSignUpSuccess' } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string }> };


export const FestRegPaymentOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"festRegPaymentOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPaymentOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"FEST_REGISTRATION"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationCreatePaymentOrderSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FestRegPaymentOrderMutation, FestRegPaymentOrderMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationSignUpSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;