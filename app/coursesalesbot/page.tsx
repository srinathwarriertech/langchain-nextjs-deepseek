import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";
import { useLayout } from "@/context/LayoutContext";

export default function AgentsPage() {

//   const InfoCard = (
    // <GuideInfoBox>
        
      
    // </GuideInfoBox>
//   );

  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={null}
      showIngestForm={false}
      showIntermediateStepsToggle={false}
      placeholder={
        '"When is the next discovery call of NeuroMastery Bootcamp?"'
      }
      emoji="🟣"
    />
  );
}
