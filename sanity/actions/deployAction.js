export function DeployAction(props) {
  return {
    label: "Deploy Site",
    onHandle: async () => {
      const response = await fetch(
        "https://api.vercel.com/v1/integrations/deploy/prj_I1ESIb4XQQYJOIXwoK4L1Hgxi8zW/iVocLen6ug"
      );
      const data = await response.json();

      console.log({ data });

      window.alert("Deployed Successfully");
    },
  };
}
