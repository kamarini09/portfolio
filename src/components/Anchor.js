import { useRouter } from "next/router";

 

export default function Anchor({ children, href, className }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href)
  }

  return (
    <a
    className={className}
    href={href}
    onClick={handleClick}
    target="_blank"
    rel="noopener noreferrer" 
    >
      {children}
    </a>
  );
}