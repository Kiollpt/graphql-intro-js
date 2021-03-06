module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAuthor {
  count: Int!
}

type AggregateBook {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Author {
  id: ID!
  name: String!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
}

type AuthorConnection {
  pageInfo: PageInfo!
  edges: [AuthorEdge]!
  aggregate: AggregateAuthor!
}

input AuthorCreateInput {
  name: String!
  books: BookCreateManyWithoutAuthorsInput
}

input AuthorCreateManyWithoutBooksInput {
  create: [AuthorCreateWithoutBooksInput!]
  connect: [AuthorWhereUniqueInput!]
}

input AuthorCreateWithoutBooksInput {
  name: String!
}

type AuthorEdge {
  node: Author!
  cursor: String!
}

enum AuthorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthorPreviousValues {
  id: ID!
  name: String!
}

input AuthorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [AuthorScalarWhereInput!]
  OR: [AuthorScalarWhereInput!]
  NOT: [AuthorScalarWhereInput!]
}

type AuthorSubscriptionPayload {
  mutation: MutationType!
  node: Author
  updatedFields: [String!]
  previousValues: AuthorPreviousValues
}

input AuthorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthorWhereInput
  AND: [AuthorSubscriptionWhereInput!]
  OR: [AuthorSubscriptionWhereInput!]
  NOT: [AuthorSubscriptionWhereInput!]
}

input AuthorUpdateInput {
  name: String
  books: BookUpdateManyWithoutAuthorsInput
}

input AuthorUpdateManyDataInput {
  name: String
}

input AuthorUpdateManyMutationInput {
  name: String
}

input AuthorUpdateManyWithoutBooksInput {
  create: [AuthorCreateWithoutBooksInput!]
  delete: [AuthorWhereUniqueInput!]
  connect: [AuthorWhereUniqueInput!]
  set: [AuthorWhereUniqueInput!]
  disconnect: [AuthorWhereUniqueInput!]
  update: [AuthorUpdateWithWhereUniqueWithoutBooksInput!]
  upsert: [AuthorUpsertWithWhereUniqueWithoutBooksInput!]
  deleteMany: [AuthorScalarWhereInput!]
  updateMany: [AuthorUpdateManyWithWhereNestedInput!]
}

input AuthorUpdateManyWithWhereNestedInput {
  where: AuthorScalarWhereInput!
  data: AuthorUpdateManyDataInput!
}

input AuthorUpdateWithoutBooksDataInput {
  name: String
}

input AuthorUpdateWithWhereUniqueWithoutBooksInput {
  where: AuthorWhereUniqueInput!
  data: AuthorUpdateWithoutBooksDataInput!
}

input AuthorUpsertWithWhereUniqueWithoutBooksInput {
  where: AuthorWhereUniqueInput!
  update: AuthorUpdateWithoutBooksDataInput!
  create: AuthorCreateWithoutBooksInput!
}

input AuthorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  books_every: BookWhereInput
  books_some: BookWhereInput
  books_none: BookWhereInput
  AND: [AuthorWhereInput!]
  OR: [AuthorWhereInput!]
  NOT: [AuthorWhereInput!]
}

input AuthorWhereUniqueInput {
  id: ID
  name: String
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  title: String!
  pages: Int
  chapters: Int
  authors(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Author!]
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  title: String!
  pages: Int
  chapters: Int
  authors: AuthorCreateManyWithoutBooksInput
}

input BookCreateManyWithoutAuthorsInput {
  create: [BookCreateWithoutAuthorsInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateWithoutAuthorsInput {
  title: String!
  pages: Int
  chapters: Int
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  pages_ASC
  pages_DESC
  chapters_ASC
  chapters_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookPreviousValues {
  id: ID!
  title: String!
  pages: Int
  chapters: Int
}

input BookScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  chapters: Int
  chapters_not: Int
  chapters_in: [Int!]
  chapters_not_in: [Int!]
  chapters_lt: Int
  chapters_lte: Int
  chapters_gt: Int
  chapters_gte: Int
  AND: [BookScalarWhereInput!]
  OR: [BookScalarWhereInput!]
  NOT: [BookScalarWhereInput!]
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateInput {
  title: String
  pages: Int
  chapters: Int
  authors: AuthorUpdateManyWithoutBooksInput
}

input BookUpdateManyDataInput {
  title: String
  pages: Int
  chapters: Int
}

input BookUpdateManyMutationInput {
  title: String
  pages: Int
  chapters: Int
}

input BookUpdateManyWithoutAuthorsInput {
  create: [BookCreateWithoutAuthorsInput!]
  delete: [BookWhereUniqueInput!]
  connect: [BookWhereUniqueInput!]
  set: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutAuthorsInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutAuthorsInput!]
  deleteMany: [BookScalarWhereInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
}

input BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput!
  data: BookUpdateManyDataInput!
}

input BookUpdateWithoutAuthorsDataInput {
  title: String
  pages: Int
  chapters: Int
}

input BookUpdateWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutAuthorsDataInput!
}

input BookUpsertWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutAuthorsDataInput!
  create: BookCreateWithoutAuthorsInput!
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  chapters: Int
  chapters_not: Int
  chapters_in: [Int!]
  chapters_not_in: [Int!]
  chapters_lt: Int
  chapters_lte: Int
  chapters_gt: Int
  chapters_gte: Int
  authors_every: AuthorWhereInput
  authors_some: AuthorWhereInput
  authors_none: AuthorWhereInput
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAuthor(data: AuthorCreateInput!): Author!
  updateAuthor(data: AuthorUpdateInput!, where: AuthorWhereUniqueInput!): Author
  updateManyAuthors(data: AuthorUpdateManyMutationInput!, where: AuthorWhereInput): BatchPayload!
  upsertAuthor(where: AuthorWhereUniqueInput!, create: AuthorCreateInput!, update: AuthorUpdateInput!): Author!
  deleteAuthor(where: AuthorWhereUniqueInput!): Author
  deleteManyAuthors(where: AuthorWhereInput): BatchPayload!
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  author(where: AuthorWhereUniqueInput!): Author
  authors(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Author]!
  authorsConnection(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthorConnection!
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  author(where: AuthorSubscriptionWhereInput): AuthorSubscriptionPayload
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    