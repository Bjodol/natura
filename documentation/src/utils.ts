export const copyClipboard = async (
    content: string,
    config = { serialize: JSON.stringify, deserialize: JSON.parse }
  ) => {
    const { state } = await navigator.permissions.query({
      name: "clipboard-write" as any,
    });
    if (state === "granted" || state === "prompt")
      navigator.clipboard.writeText(config.serialize(content));
  };