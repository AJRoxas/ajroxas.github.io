interface ActivityContentProps {
  heading: string;
  subheading: string;
  duration: string;
  responsibilities: string[];
  className?: string;
}

const ActivityContent = ({ heading, subheading, duration, responsibilities, className }: ActivityContentProps) => {
  return (
    <div className={`content-box ${className}`}>
      <h3>{heading}</h3>
      <p>
        {subheading}
        <br />
        {duration}  
      </p>
      <ul>
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityContent;
