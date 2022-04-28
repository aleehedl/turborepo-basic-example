import { Button } from "ui";

export default function Docs({ env }) {
  return (
    <div>
      <h1>Docs ({env})</h1>
      <Button />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      env: process.env.NODE_ENV,
    }
  }
}
