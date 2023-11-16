import { useForm } from "react-hook-form";

export default function Admin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-28 w-screen flex flex-col items-center">
      <div className="w-full max-w-[900px]">
        <h1 className="text-3xl font-bold text-center">Projects Admin</h1>

        <form className="mt-12 p-5 border border-slate-300 rounded-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-4">
            <label htmlFor="transkip_nilai">File Transkip Nilai</label>
            <input type="file" id="transkip_nilai" {...register("transkip_nilai")} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="sertifikat">File Sertifikat</label>
            <input type="file" id="sertifikat" {...register("sertifikat")} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="biodata">File Biodata</label>
            <input type="file" id="biodata" {...register("biodata")} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="sktm">File SKTM</label>
            <input type="file" id="sktm" {...register("sktm")} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="pasfoto">File Pasfoto</label>
            <input type="file" id="pasfoto" {...register("pasfoto")} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="resume_pribadi">File Resume Pribadi</label>
            <input type="file" id="resume_pribadi" {...register("resume_pribadi")} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="proposal">File Proposal</label>
            <input type="file" id="proposal" {...register("proposal")} />
          </div>

          <div className="form-group">
            <label htmlFor="proposal">Address ETH</label>
            <input
              type="text"
              id="address_eth"
              placeholder="Masukkan Address ETH"
              {...register("address_eth")}
            />
          </div>

          {/* save button */}
          <button
            type="submit"
            className="mt-10 w-full inline-block px-6 py-2.5 bg-blue-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
