document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', '你的_upload_preset'); // 替换为你的 Upload Preset

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/你的_cloud_name/image/upload`, // 替换为你的 Cloud Name
            {
                method: 'POST',
                body: formData,
            }
        );
        const result = await response.json();
        document.getElementById('status').textContent = `上传成功！文件链接：${result.secure_url}`;
    } catch (error) {
        document.getElementById('status').textContent = '上传失败：' + error.message;
    }
});
