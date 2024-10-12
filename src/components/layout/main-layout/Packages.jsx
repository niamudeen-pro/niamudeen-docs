import { Link } from "react-router-dom";
import { sendNotification } from "../../../utils/notifications";
import { MdContentCopy } from "react-icons/md";

export default function PackagesToInstalled({ packages }) {
  const handleCopyCodeSnippet = (code) => {
    navigator.clipboard.writeText(code);
    sendNotification("success", "Code copied successfully");
  };

  if (packages?.length === 0) {
    return null;
  }

  return (
    <>
      <h2>Install the following dependencies:</h2>
      {packages?.map((pkg, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-background p-5 rounded-md border-border border-2"
        >
          <Link to={pkg.link} target="_blank">
            <p className="hover:text-primary">{pkg.name}</p>
          </Link>
          <MdContentCopy
            size={22}
            className="cursor-pointer hover:text-primary"
            onClick={() => handleCopyCodeSnippet(pkg.name)}
          />
        </div>
      ))}
    </>
  );
}
