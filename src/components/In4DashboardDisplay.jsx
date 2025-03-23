import React from 'react';
import employees from '../data/In4UserExample';
const In4DashboardDisplay = () => {
    const emp = employees[0];
    return (
        <div className = 'flex flex-col gap-4 p-6 max-w-4xl mx-auto min-h-screen'>
            <ProfileField label="Tên" value={emp.name} />
            <ProfileField label="Giới tính" value={emp.gender} />
            <ProfileField label="Điện thoại" value={emp.phone} />
            <ProfileField label="Địa chỉ" value={emp.address} />
            <ProfileField label="Ngày sinh" value={emp.date_of_birth} />
            <ProfileField label="Ngày làm việc" value={emp.hire_date} />
            <ProfileField label="Email" value={emp.email} isLink={true} />
            <ProfileField label="Hình ảnh" value={emp.profile_url} isLink={true} />
            <div className="flex gap-4">
                <ProfileField label="Số thẻ" value={emp.card_number} className="flex-1" />
                <ProfileField value={emp.bank_name} className="w-40" />
            </div>
            <ProfileField label="Vai trò" value={emp.role} />
            <ProfileField label="Mức lương" value={emp.salary} />
        </div>
    )
}
function ProfileField({label, value, isLink, className }){
    return (
        <div className = 'flex items-center w-full'>
            {label && (
                <span className = 'w-32 text-white font-embed-code uppercase tracking-wide'>
                    {label}
                </span>
            )}
            {isLink ? (
                <a 
                    href={value} 
                    className={`border border-blue-400 rounded px-4 py-2 bg-gray-700 text-blue-300 underline w-full text-center flex items-center justify-center ${className}`}>{value}
                </a>
            ) : (
                <span 
                    className={`border border-gray-500 rounded px-4 py-2 bg-gray-700 text-white w-full text-center flex items-center justify-center ${className}`}>{value}
                </span>
            )}
        </div>
    )
}
export default In4DashboardDisplay;