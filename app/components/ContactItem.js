"use client";

import Link from "next/link";

export default function ContactItem({ contact }) {
    return (
        <li style={{ marginBottom: 8 }}>
            <Link href={`/contact/${contact.id}`}>
                {contact.name} — {contact.email}
            </Link>
        </li>
    );
}