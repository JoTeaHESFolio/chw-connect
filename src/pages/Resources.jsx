import React, { useEffect, useState } from "react";
import { fetchResourcesFromSheet } from "../utils/api";
import ResourceDirectory from "../components/ResourceDirectory";

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResourcesFromSheet().then((data) => setResources(data));
  }, []);

  return (
    <section>
      <h1>Community Resources</h1>
      <p>This is a searchable directory of local resources.</p>
      <input
        type="text"
        placeholder="Search resources by topic..."
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <ResourceDirectory resources={resources} />
    </section>
  );
}

export default Resources;
