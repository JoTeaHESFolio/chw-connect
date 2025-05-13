export async function fetchResourcesFromSheet() {
  try {
    const response = await fetch(
      "https://opensheet.vercel.app/1M1k7grNtLP1BvpitMAX04U41tR6ZoskF3EFZ6H22E4U/Resources"
    );
    if (!response.ok) throw new Error("Failed to fetch resources");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

export async function fetchParticipantsFromSheet() {
  try {
    const response = await fetch(
      "https://opensheet.vercel.app/1M1k7grNtLP1BvpitMAX04U41tR6ZoskF3EFZ6H22E4U/DemoParticipants"
    );
    if (!response.ok) throw new Error("Failed to fetch participants");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
