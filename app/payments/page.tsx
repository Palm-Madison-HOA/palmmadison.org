export default function PaymentsPage() {
  return (
    <section className="page-section">
      <h2 className="page-title">HOA Payments</h2>

      <p className="page-text">
        Unit owners may pay their quarterly HOA dues using Zelle. Please send
        payments to the official HOA payments address below.
      </p>

      <div>
        <h3>Zelle Email</h3>
        <p className="page-text"><strong>payments@palmmadison.org</strong></p>
      </div>

      <p className="page-text">
        Be sure to include your <strong>unit number</strong> in the memo so we
        can correctly apply your payment.
      </p>

      <p className="page-text">
        Until our new HOA email system is fully activated, please notify the
        HOA after sending your payment by emailing{" "}
        <strong>dgregory37@yahoo.com</strong>. This helps us confirm receipt
        and keep our records accurate. This step will not be required once the
        HOA email system is finalized.
      </p>
    </section>
  );
}
