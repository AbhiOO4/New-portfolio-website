function TechStackBadges({ tech = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item, index) => (
        <div
          key={index}
          className="badge badge-soft badge-primary text-xs sm:text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default TechStackBadges;