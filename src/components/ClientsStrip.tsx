const provenOn = [
  "ShopEase",
  "Trackzone Energy",
  "MediTrack",
  "Virtual Classroom Platform",
];

const techStack = ["React", "Next.js", "Node.js", "PostgreSQL", "Paystack", "Flutter", "Firebase"];

export default function ClientsStrip() {
  return (
    <div className="bg-surface py-9 px-6 md:px-15 border-y border-border flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 overflow-hidden">
        <div className="text-xs font-bold text-text-muted tracking-wider uppercase whitespace-nowrap sm:pr-10 sm:border-r border-border sm:mr-10 shrink-0">
          Proven On Real Projects
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12">
          {provenOn.map((c) => (
            <div key={c} className="font-display text-sm font-extrabold text-gray-mid tracking-tight whitespace-nowrap">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
