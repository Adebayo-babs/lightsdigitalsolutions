const projects = [
  "ShopEase",
  "Trackzone Energy",
  "Virtual Classroom",
  "MediTrack",
];

export default function ClientsStrip() {
  return (
    <div className="border-y border-border bg-surface py-7">
      <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 text-sm font-medium text-text-muted">Selected work</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-10">
          {projects.map((project) => (
            <span key={project} className="font-display text-lg text-text">
              {project}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
