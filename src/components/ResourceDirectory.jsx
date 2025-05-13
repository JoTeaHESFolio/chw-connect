function ResourceDirectory({ resources }) {
  return (
    <section>
      <h2>Resource Directory</h2>
      {resources.length === 0 ? (
        <p>Loading resources...</p>
      ) : (
        <div>
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <strong>{resource.Title}</strong>
              <br />
              <em>Type:</em> {resource.Type} | <em>Source:</em>{" "}
              {resource.Source}
              <br />
              {resource.Link && (
                <span>
                  <em>Link:</em>{" "}
                  <a
                    href={resource.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                  <br />
                </span>
              )}
              {resource.File && (
                <span>
                  <em>File:</em>{" "}
                  <a
                    href={resource.File}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View File
                  </a>
                  <br />
                </span>
              )}
              {resource.UseCase && (
                <span>
                  <em>Use Case:</em> {resource.UseCase}
                  <br />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ResourceDirectory;
