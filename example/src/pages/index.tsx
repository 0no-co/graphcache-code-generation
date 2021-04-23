import { gql } from "@urql/core";
import { useQuery } from "urql";

const TODOS_QUERY = gql`
  query getTodos {
    todos {
      id
      text
    }
  }
`;

function Index() {
  const [res] = useQuery({ query: TODOS_QUERY });

  if (res.fetching) return 'loading';

  return (
    <div>
      {res.data.todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.text}
        </div>
      ))}
    </div>
  );
}

export default Index
