import React from "react";

const delay = async (): Promise<number> => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 1000);
  });

  await promise.then((data) => {  });
  return 1;
}

const Dashboard: React.FC = async () => {
  const d = await delay();
  return (
    <main>
      <div>Dashboard - {d}</div>
    </main>
  )
}

export default Dashboard;