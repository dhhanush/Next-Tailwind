import NavLink from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

export default function Link({ href, children }) {
  const router = useRouter();
  return (
    <NavLink href={href}>
      <a className={router.pathname === href ? styles.active : undefined}>
        {children}
      </a>
    </NavLink>
  );
}
