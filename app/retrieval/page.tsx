import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
            This template showcases how to perform retrieval with a{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            chain and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🪜
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question, dereferencing pronouns based on
                the chat history.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
                <br />
                <b>Try asking "What are the outcomes of the course?"</b>
              </span>
            </li>
          </ul>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/retrieval/route.ts</code>.
          </span>
        </li>
        <li className="text-l">
          🎨
          <span className="ml-2">
            The main frontend logic is found in{" "}
            <code>app/retrieval/page.tsx</code>.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🔱
          <span className="ml-2">
            Before running this example on your own, you&apos;ll first need to
            set up a Supabase vector store. See the README for more details.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Upload some text, then try asking e.g.{" "}
            <code>What are the outcomes of the course?</code> below!
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        "I've an AI Agent with with access to NeuroMastery Bootcamp documents! Ask, 'What are the outcomes of the course?'"
      }
      emoji="🟣"
    />
  );
}
