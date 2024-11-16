"use client";

import styles from "../login/Login.module.css";
import Link from "next/link";
import SignUpForm from "./signup";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoSVGwrapper}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logosvg}
            width="35"
            zoomAndPan="magnify"
            viewBox="0 0 810 809.999993"
            height="35"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="d6b8141196">
                <path
                  d="M 206.589844 369.792969 L 315.339844 369.792969 L 315.339844 542 L 206.589844 542 Z M 206.589844 369.792969 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="d2799a32fa">
                <path
                  d="M 206.589844 508 L 315.339844 508 L 315.339844 688.847656 L 206.589844 688.847656 Z M 206.589844 508 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="4426fa6276">
                <path
                  d="M 206.589844 478 L 315.339844 478 L 315.339844 542 L 206.589844 542 Z M 206.589844 478 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="454dc0a4b6">
                <path
                  d="M 438.398438 199.265625 L 643.789062 199.265625 L 643.789062 300.84375 L 438.398438 300.84375 Z M 438.398438 199.265625 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="ecd11825c9">
                <path
                  d="M 206.589844 298.941406 L 523 298.941406 L 523 351 L 206.589844 351 Z M 206.589844 298.941406 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="f2cd41fba2">
                <path
                  d="M 206.589844 317 L 316 317 L 316 404.691406 L 206.589844 404.691406 Z M 206.589844 317 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="58a7599160">
                <path
                  d="M 206.589844 298.941406 L 316 298.941406 L 316 351 L 206.589844 351 Z M 206.589844 298.941406 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="e3dd6d8d8b">
                <path
                  d="M 439.664062 392 L 540 392 L 540 478.023438 L 439.664062 478.023438 Z M 439.664062 392 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="1f26540b7a">
                <path
                  d="M 206.589844 198.25 L 372.339844 198.25 L 372.339844 300.546875 L 206.589844 300.546875 Z M 206.589844 198.25 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="41916fcff8">
                <path
                  d="M 313.464844 392.324219 L 372.714844 392.324219 L 372.714844 477.824219 L 313.464844 477.824219 Z M 313.464844 392.324219 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="d30dd01199">
                <path
                  d="M 377 156 L 433 156 L 433 443.007812 L 377 443.007812 Z M 377 156 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="242585f689">
                <path
                  d="M 332.730469 32.519531 L 477.808594 32.519531 L 477.808594 159 L 332.730469 159 Z M 332.730469 32.519531 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="b8a3491b5b">
                <path
                  d="M 377 373.707031 L 433 373.707031 L 433 637.996094 L 377 637.996094 Z M 377 373.707031 "
                  clip-rule="nonzero"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#d6b8141196)">
              <path
                fill="#ffffff"
                d="M 206.589844 366.722656 L 206.589844 541.757812 C 206.59375 476.902344 318.058594 478.195312 318.058594 478.195312 L 412.09375 478.195312 C 444.335938 478.195312 475.292969 455.125 498.269531 413.960938 L 524.640625 366.722656 L 206.589844 366.722656 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#d2799a32fa)">
              <path
                fill="#98beff"
                d="M 206.589844 541.757812 L 206.589844 688.847656 L 253.828125 662.476562 C 294.992188 639.5 318.058594 608.542969 318.058594 576.304688 L 318.058594 516.15625 C 288.347656 507.703125 223.835938 495.433594 206.589844 541.757812 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#4426fa6276)">
              <path
                fill="#bdd7ff"
                d="M 206.589844 541.757812 C 223.835938 495.433594 288.347656 507.703125 318.058594 516.15625 L 318.058594 478.195312 C 318.058594 478.195312 206.59375 476.902344 206.589844 541.757812 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#454dc0a4b6)">
              <path
                fill="#ffffff"
                d="M 539.429688 302.796875 L 244.039062 302.796875 C 244.039062 302.796875 244.039062 199.265625 348.566406 199.265625 L 643.953125 199.265625 L 619.464844 243.140625 C 598.121094 281.371094 569.378906 302.796875 539.429688 302.796875 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#ecd11825c9)">
              <path
                fill="#ffffff"
                d="M 204.371094 175.785156 L 204.371094 350.816406 C 204.375 285.960938 315.839844 287.253906 315.839844 287.253906 L 409.875 287.253906 C 442.117188 287.253906 473.074219 264.1875 496.050781 223.019531 L 522.421875 175.785156 L 204.371094 175.785156 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#f2cd41fba2)">
              <path
                fill="#ffffff"
                d="M 204.371094 350.816406 L 204.371094 497.910156 L 251.609375 471.539062 C 292.773438 448.558594 315.839844 417.605469 315.839844 385.363281 L 315.839844 325.214844 C 286.128906 316.761719 221.617188 304.492188 204.371094 350.816406 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#58a7599160)">
              <path
                fill="#ffffff"
                d="M 204.371094 350.816406 C 221.617188 304.492188 286.128906 316.761719 315.839844 325.214844 L 315.839844 287.253906 C 315.839844 287.253906 204.375 285.960938 204.371094 350.816406 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#e3dd6d8d8b)">
              <path
                fill="#ffffff"
                d="M 294.726562 392.257812 L 294.726562 527.183594 C 294.730469 477.191406 380.65625 478.1875 380.65625 478.1875 L 453.144531 478.1875 C 477.996094 478.1875 501.859375 460.40625 519.570312 428.671875 L 539.902344 392.257812 L 294.726562 392.257812 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#1f26540b7a)">
              <path
                fill="#ffffff"
                d="M 524.640625 309.726562 L 206.589844 309.726562 C 206.589844 309.726562 206.589844 198.25 319.136719 198.25 L 637.1875 198.25 L 610.816406 245.492188 C 587.835938 286.65625 556.886719 309.726562 524.640625 309.726562 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#41916fcff8)">
              <path
                fill="#ffffff"
                d="M 169.335938 389.621094 L 169.335938 601.175781 C 169.34375 522.789062 304.0625 524.351562 304.0625 524.351562 L 417.71875 524.351562 C 456.6875 524.351562 494.101562 496.46875 521.875 446.714844 L 553.746094 389.621094 L 169.335938 389.621094 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#d30dd01199)">
              <path
                fill="#dae7ff"
                d="M 377.195312 443.007812 L 377.195312 156.792969 L 432.796875 156.792969 L 432.796875 443.007812 Z M 377.195312 443.007812 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#242585f689)">
              <path
                fill="#dae7ff"
                d="M 477.15625 158.308594 L 332.835938 157.777344 L 405.457031 32.976562 Z M 477.15625 158.308594 "
                fill-opacity="1"
                fill-rule="evenodd"
              />
            </g>
            <g clip-path="url(#b8a3491b5b)">
              <path
                fill="#dae7ff"
                d="M 377.191406 637.996094 L 377.191406 351.777344 L 432.792969 351.777344 L 432.792969 637.996094 Z M 377.191406 637.996094 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <div className={styles.logoText}>fin'ed</div>
        </div>
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <p className={styles.titleHeader}>Hello, Sign Up!</p>
            <p className={styles.titleSubheader}>
              Please enter your details below
            </p>
          </div>
          <SignUpForm />
        </div>
        <div className={styles.bottomLinkWrapper}>
          <p className={styles.bottomLink}>
            Already have an account?&nbsp;
            <Link href="/account/login" className="highlightedText">
              Sign in.
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          alt=""
          src="/assets/backgrounds/MAINBACKGROUND.png"
          layout="fill" // Make the image responsive to the div's size
          objectFit="cover" // Ensure the image fills the div without stretching
        />
      </div>
    </div>
  );
}
