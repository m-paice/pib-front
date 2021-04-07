import React, { useState, useCallback } from "react";

import LacunaWebPKI, { CertificateModel } from "web-pki";

const pki = new LacunaWebPKI(
    "ASYAanNmaWRkbGUubmV0LHdlYnBraS5sYWN1bmFzb2Z0d2FyZS5jb20AAAABClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ==",
);

export const useListCertificates = (): [CertificateModel[], () => void] => {
    const [certificates, setCertificates] = useState<CertificateModel[]>([]);

    const handleOnWebPkiReady = useCallback(() => {
        pki.listCertificates().success(function (certs) {
            setCertificates(certs);
        });
    }, []);

    const handleStart = () => {
        pki.init({
            ready: handleOnWebPkiReady,
        });
    };

    return [certificates, handleStart];
};

export const useReadCert = (): [(selectedCertThumb: any) => Promise<unknown>] => {
    const handleReadCertificate = useCallback((selectedCertThumb) => {
        return new Promise((resolve, reject) => {
            pki.readCertificate(selectedCertThumb).success(function (certEncoding) {
                resolve(certEncoding);
            });
        });
    }, []);

    return [handleReadCertificate];
};

export const useSignData = (): [(selectedCertThumb, nonce) => Promise<unknown>] => {
    const handleSignData = useCallback((selectedCertThumb, nonce) => {
        return new Promise((resolve, reject) => {
            pki.signData({
                thumbprint: selectedCertThumb,
                data: nonce,
                digestAlgorithm: "SHA-256",
            }).success(function (signature) {
                resolve(signature);
            });
        });
    }, []);

    return [handleSignData];
};

export const useSignHash = (): [string, (selectedCertThumb) => void] => {
    const [signatureHash, setSignatureHash] = useState("");

    const handleSignHash = useCallback((selectedCertThumb) => {
        pki.signHash({
            thumbprint: selectedCertThumb,
            hash: "3/1gIbsr1bCvZ2KQgJ7DpTGR3YHH9wpLKGiKNiGCmG8=", // Base64 encoding of the SHA-256 digest of the ASCII encoding of the string "Hello, World!"
            digestAlgorithm: "SHA-256",
        }).success(function (signature) {
            setSignatureHash(signature);
        });
    }, []);

    return [signatureHash, handleSignHash];
};
