import MainLayout from "@/components/common/layouts/MainLayout";

export default function SedapPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>This is sedap Page Uptade</h1>
    </div>
  );
}
SedapPage.getLayout = (pageProps) => (
  <MainLayout>
    <SedapPage {...pageProps} />
  </MainLayout>
);
