import { Inter } from "@next/font/google";
import Link from "next/link";
import { Button } from "../components/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2>eureco prototype</h2>
      <Link href="/login" className="my-5 ">
        <Button>Login</Button>
      </Link>
      <Link href="/capturehtml" className="mb-5">
        <Button>Capture1</Button>
      </Link>
      <Link href="/capturecam" className="mb-5">
        <Button>Capture2</Button>
      </Link>
      <Link href="/chat/subject" className="mb-5">
        <Button>Chat</Button>
      </Link>
      <Button
        outlined={false}
        size={"small"}
        onClick={() => (document.location.href = "https://reactjs.org")}
      >
        Submit
      </Button>
    </div>
  );
}
