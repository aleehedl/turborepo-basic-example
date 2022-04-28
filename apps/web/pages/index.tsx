import { Button } from "ui";

export default function Web({ env }) {
  return (
    <div>
      <h1>Web ({env})</h1>
      <Button />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      env: process.env.NODE_ENV,
    }
  };
}
