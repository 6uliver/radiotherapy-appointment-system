import { PageBase } from "./PageBase";
import home from "./truebeam.jpg";

export function Home() {
  return (
    <PageBase title="Welcome to OncoSync">
      <img src={home}></img>
    </PageBase>
  );
}
