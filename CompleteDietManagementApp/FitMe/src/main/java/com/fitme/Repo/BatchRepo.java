package com.fitme.Repo;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fitme.model.Batch;

public interface BatchRepo extends CrudRepository<Batch, String> {

	/**
	 * Returns the end date of the Batch matching the batch id passed
	 * 
	 * @param batchId
	 * @return batch end date
	 */
	@Query("SELECT b.endDate FROM Batch b WHERE b.batchId=:batchId")
	LocalDate findBatchEndDate(@Param("batchId") String batchId);
	

}
