import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import ComponenExample from './component';
import ResponsiveComponent from './component';
import FileUpload from './component/FileUpload';
import PhotoCapture from './component/PhotoCapture';

export default function ExampleUploadPhotoCapture() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="upload-photo"
          element={
            <ResponsiveComponent>
              <div>
                <h1>Responsive File Upload and Photo Capture</h1>
                <FileUpload />
                <PhotoCapture />
              </div>
            </ResponsiveComponent>
          }
        />
      </Route>
      <Route index element={<Navigate to="/apps/upload/upload-photo" />} />
    </Routes>
  );
}



