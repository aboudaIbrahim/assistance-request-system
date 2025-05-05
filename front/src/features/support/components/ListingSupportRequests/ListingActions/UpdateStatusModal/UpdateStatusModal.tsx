import { useUpdateStatusMutation } from "@/features/support/api/support.api";
import { UpdateStatusModalProps } from "./UpdateStatusModal.type";
import CustomModal from "@/components/CustomModal/CustomModal";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import TextFieldInput from "@/components/Inputs/TextFieldInput/TextFIeldInput";
import { COMMENT_INPUT_CONFIG } from "./UpdateStatusModal.constant";

function UpdateStatusModal({
  onClose,
  open,
  requestId,
  isRequestAccepted,
}: UpdateStatusModalProps) {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });
  const [updateStatus, { isLoading: isUpdatingStatus }] =
    useUpdateStatusMutation();

  const updateStatusHandler = formMethods.handleSubmit(
    async (values: FieldValues) => {
      const { comment } = values;
      try {
        await updateStatus({
          id: requestId,
          status: isRequestAccepted ? "Approved" : "Rejected",
          adminComment: comment,
        }).unwrap();
        onClose();
        formMethods.reset();
      } catch (e) {
        console.error(e);
      }
    }
  );
  const modalTitle = isRequestAccepted
    ? "Accepter la demande"
    : "Rejeter la demande";

  return (
    <FormProvider {...formMethods}>
      <CustomModal
        title={modalTitle}
        open={open}
        onClose={onClose}
        onConfirm={updateStatusHandler}
        isLoading={isUpdatingStatus}
      >
        <TextFieldInput
          fieldName={COMMENT_INPUT_CONFIG.fieldName}
          label={COMMENT_INPUT_CONFIG.label}
          rules={COMMENT_INPUT_CONFIG.rules}
          isTextArea
        />
      </CustomModal>
    </FormProvider>
  );
}

export default UpdateStatusModal;
