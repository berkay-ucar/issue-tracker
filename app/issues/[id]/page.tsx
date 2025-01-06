import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailPage = async (props: Props) => {
  const params = await props.params;
  // if (typeof params.id !== "number") notFound(); //optional

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  //await delay(2000);

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
