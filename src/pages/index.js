import { useQuery } from "../graphql/apollo-client";

// const ALL_PEOPLE_2 = gql`
//   query AllPeople {
//     people {
//       id
//       name
//     }
//   }
// `;

// This is what the commented-out `ALL_PEOPLE` query about would resolve to.
const ALL_PEOPLE = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllPeople" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "people" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "name" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 32,
    source: {
      body: "query AllPeople{people{id name}}",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
};

export default function Home() {
  const { loading, data } = useQuery(ALL_PEOPLE);

  return (
    <ul>
      {data?.people.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}
